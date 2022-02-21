import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';
import pug from 'gulp-pug';
import htmlmin from 'gulp-htmlmin';

export const html = () => {
  return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "PUG",
        message: "Error: <%= error.message %>"
      }))
    )
    .pipe(pug({
      // Сжатие файла
      pretty: true,
      // Показать в терминале какой файл обработан
      verbose: true
    }))
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    .pipe(
      app.plugins.if(
        app.isBuild,
        webpHtmlNosvg()
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        versionNumber({
          'value': '%DT%',
          'append': {
            'key': '_v',
            'cover': 0,
            'to': [
              'css',
              'js',
            ]
          },
          'output': {
            'file': 'gulp/version.json'
          }
        })  
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        htmlmin({
          includeAutoGeneratedTags: true,
          removeAttributeQuotes: false,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          sortClassName: false,
          useShortDoctype: true,
          collapseWhitespace: true
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream());
}