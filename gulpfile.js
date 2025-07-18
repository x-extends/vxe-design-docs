const gulp = require('gulp')
const fs = require('fs')
const del = require('del')
const replace = require('gulp-replace')
const rename = require('gulp-rename')
const zip = require('gulp-zip')
const UglifyJS = require('uglify-js')
const XEUtils = require('xe-utils')

const enableAd = true
const enableSponsors = true

// 是否启用强制广告
const isForceAd = false

const adVariable = {
  VXE_AD_WRAPPER_ID: XEUtils.sample('qazxswedcvfrtgbnhyujmkiolp0123456789'.split(''), 18).join(''),
  VXE_AD_WRAPPER_STYLE: `position: fixed !important;right: 20px !important;top: ${XEUtils.sample([60, 80, 100, 120, 140])}px !important;width: 240px !important;padding: 0 !important;margin: 0 !important;z-index: 99 !important;display: block !important;text-align: left !important;`,
  VXE_AD_SPONSOR_ID: XEUtils.sample('qazxswedcvfrtgbnhyujmkiolp0123456789'.split(''), 16).join(''),
  VXE_AD_WWADS_STYLE: 'max-width: 200px !important;;visibility: visible !important;display: block !important;'
}

// 赞助商
const ssTmpJS = UglifyJS.minify(XEUtils.toFormatString(fs.readFileSync('./ad/ssTmpl.js', 'utf-8'), adVariable), {
  toplevel: true,
  output: {
    beautify: false
  }
})
const ssTmplScript = `<script>(function(){${ssTmpJS.code}})()</script>`
const sponsorsJS = UglifyJS.minify(XEUtils.toFormatString(fs.readFileSync('./ad/sponsors.js', 'utf-8'), adVariable), {
  toplevel: true,
  output: {
    beautify: false
  }
})
const sponsorsTmplScript = `<script>(function(){${sponsorsJS.code}})()</script>`

// 广告位
const adTmpJS = UglifyJS.minify(XEUtils.toFormatString(fs.readFileSync('./ad/adTmpl.js', 'utf-8'), adVariable), {
  toplevel: true,
  output: {
    beautify: false
  }
})
const adTmplScript = `<script>(function(){${adTmpJS.code}})()</script>`
const adCheckJS = UglifyJS.minify(XEUtils.toFormatString(fs.readFileSync('./ad/check.js', 'utf-8'), adVariable), {
  toplevel: true,
  output: {
    beautify: false
  }
})
const adCheckScript = `<script>${adCheckJS.code}</script>`
const adScript = `<script data-mode="hash" type="text/javascript" charset="UTF-8" src="https://cdn.wwads.cn/js/makemoney.js" async></script>`

// 访问数量统计
const tjTmpJS = UglifyJS.minify(XEUtils.toFormatString(fs.readFileSync('./ad/tjTmpl.js', 'utf-8'), adVariable), {
  toplevel: true,
  output: {
    beautify: false
  }
})
const hmScript = `<script>${tjTmpJS.code}</script>`

gulp.task('clear_docs_temp', () => {
  return del([
    '_temp',
    'docs',
    'docs.zip'
  ], { force: true })
})

gulp.task('copy_v3_temp', () => {
  return gulp.src('v3/dist/**')
    .pipe(gulp.dest('_temp/v3'))
})
gulp.task('copy_v3_index', gulp.series('copy_v3_temp', () => {
  return gulp.src('v3/dist/index.html')
    .pipe(replace('</head>', enableAd ? `${adScript}${isForceAd ? adCheckScript : ''}</head>`: '</head>'))
    .pipe(replace('</body>', `${enableSponsors ? ssTmplScript : ''}${ enableSponsors ? sponsorsTmplScript : ''}${enableAd ? adTmplScript : ''}</body>`))
    .pipe(gulp.dest('_temp/v3'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/v3'))
}))
gulp.task('copy_v3_docs', gulp.series('copy_v3_index', () => {
  return gulp.src('_temp/v3/**')
    .pipe(gulp.dest('docs/v3'))
}, () => {
  return gulp.src([
    '_temp/v3/**/*.html',
  ], { base: './_temp/' })
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(gulp.dest('docs'))
}))

gulp.task('copy_v4_temp', () => {
  return gulp.src('v4/dist/**')
    .pipe(gulp.dest('_temp/v4'))
})
gulp.task('copy_v4_index', gulp.series('copy_v4_temp', () => {
  return gulp.src('v4/dist/index.html')
    .pipe(replace('</head>', enableAd ? `${adScript}${isForceAd ? adCheckScript : ''}</head>`: '</head>'))
    .pipe(replace('</body>', `${enableSponsors ? ssTmplScript : ''}${ enableSponsors ? sponsorsTmplScript : ''}${enableAd ? adTmplScript : ''}</body>`))
    .pipe(gulp.dest('_temp/v4'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/v4'))
}))
gulp.task('copy_v4_docs', gulp.series('copy_v4_index', () => {
  return gulp.src('_temp/v4/**')
    .pipe(gulp.dest('docs/v4'))
}, () => {
  return gulp.src([
    '_temp/v4/**/*.html',
  ], { base: './_temp/' })
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(gulp.dest('docs'))
}))

gulp.task('copy_docs_index', gulp.series('copy_v3_index', 'copy_v4_index', () => {
  return gulp.src('_temp/**')
    .pipe(gulp.dest('docs'))
}, () => {
  return gulp.src([
    '_temp/v3/**/*.html',
    '_temp/v4/**/*.html',
  ], { base: './_temp/' })
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(gulp.dest('docs'))
}))

const unicodeRE = /[^\x00-\xff]/g
const contentRE = /(?<!-)content\s*:\s*([^;}]+)/g

gulp.task('build_css_unicode', () => {
  return gulp.src([
    '_temp/**/**.css'
  ])
    .pipe(replace(contentRE, (u) => {
      return u.replace(unicodeRE, (m) => {
        return '\\' + m.charCodeAt(0).toString(16)
      })
    }))
    .pipe(gulp.dest('docs'))
})

gulp.task('build_latest_docs', () => {
  return gulp.src([
    'docs/v4/*.html',
    'docs/v4/*.ico',
    'docs/v4/*.png',
    'docs/v4/*.txt'
  ])
    .pipe(gulp.dest('docs'))
})

gulp.task('build_v3_docs', gulp.series('clear_docs_temp', 'copy_v3_docs', 'build_css_unicode', () => {
  return del([
    '_temp'
  ], { force: true })
}))

gulp.task('build_v4_docs', gulp.series('clear_docs_temp', 'copy_v4_docs', 'build_latest_docs', 'build_css_unicode', () => {
  return del([
    '_temp'
  ], { force: true })
}))

gulp.task('build_all_docs', gulp.series('clear_docs_temp', 'copy_docs_index', 'build_css_unicode', 'build_latest_docs', () => {
  return del([
    '_temp'
  ], { force: true })
}))

gulp.task('build_v3_zip', () => {
  return gulp.src([
    'docs/v3/**'
  ], { base: './docs/' })
    .pipe(zip('docs_v3.zip'))
    .pipe(gulp.dest('./'))
})

gulp.task('build_v4_zip', () => {
  return gulp.src([
    'docs/v4/**',
    'docs/*'
  ], { base: './docs/' })
    .pipe(zip('docs_v4.zip'))
    .pipe(gulp.dest('./'))
})

gulp.task('build_all_zip', () => {
  return gulp.src('docs/**')
    .pipe(zip('docs.zip'))
    .pipe(gulp.dest('./'))
})
