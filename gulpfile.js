// основной модуль
import gulp from "gulp";
import {path} from "./gulp/config/path.js"
import {plugins} from "./gulp/config/plugins.js"

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins,
}

import {copy} from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";
import {server} from "./gulp/tasks/server.js";
import {scss} from "./gulp/tasks/scss.js"
import {js} from "./gulp/tasks/js.js"
import {images} from "./gulp/tasks/images.js"
import {otfToTtf, ttfToWoff, fontsStyle, copyWoff2} from "./gulp/tasks/fonts.js"
import {svgSprive} from "./gulp/tasks/svgSprite.js"

// all task after reset, which operate in parallel
function watcher() {
    // gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.css, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

// Я бы хотела назвать svgSprite, но это re-declaration
export { svgSprive }

const fonts = gulp.series(otfToTtf, ttfToWoff, copyWoff2, fontsStyle);

const mainTask = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));


// Сценарий выполнения задач
const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTask);

export {dev};
export {build};

gulp.task('default', dev);