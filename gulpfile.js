var gulp = require('gulp');
// 引用该模块后可以使用$符号引用其他gulp模块，加入()实例化
var $ = require('gulp-load-plugins')();
var open = require('open');

var app = {
	srcPath: 'src/', //源代码目录
	devPath: 'build/', //开发目录
	prdPath: 'dist/' //生产目录
};

// 拷贝bower库，pipe用于读取,dest用于写，connect.reload()用于构建完成后刷新浏览器
gulp.task('lib', function () {
	gulp.src('bower_components/**/*.js')
		.pipe(gulp.dest(app.devPath + 'vendor'))
		.pipe(gulp.dest(app.prdPath + 'vendor'))
		.pipe($.connect.reload());
});

// 拷贝HTML文件
gulp.task('html', function () {
	gulp.src(app.srcPath + '**/*.html')
		.pipe(gulp.dest(app.devPath))
		.pipe(gulp.dest(app.prdPath))
		.pipe($.connect.reload());
});

// 拷贝JSON
gulp.task('json', function () {
	gulp.src(app.srcPath + 'data/**/*.json')
		.pipe(gulp.dest(app.devPath + 'data'))
		.pipe(gulp.dest(app.prdPath + 'data'))
		.pipe($.connect.reload());
});

// 拷贝less，gulp.less用于编译,由于使用了gulp-load-plugins，所以使用$代替，cssmin用于压缩CSS文件
gulp.task('less', function () {
	gulp.src(app.srcPath + 'style/index.less')
		.pipe($.plumber())
		.pipe($.less())
		.pipe(gulp.dest(app.devPath + 'css'))
		.pipe($.cssmin())
		.pipe(gulp.dest(app.prdPath + 'css'))
		.pipe($.connect.reload());
});

// 拷贝js,concat合并js文件
gulp.task('js', function () {
	gulp.src(app.srcPath + 'script/**/*.js')
		.pipe($.plumber())
		.pipe($.concat('index.js'))
		.pipe(gulp.dest(app.devPath + 'js'))
		//  .pipe($.uglify())
		.pipe(gulp.dest(app.prdPath + 'js'))
		.pipe($.connect.reload());
});

// 拷贝image,imagemin压缩图片
gulp.task('image', function () {
	gulp.src(app.srcPath + 'image/**/*')
		.pipe(gulp.dest(app.devPath + 'image'))
		.pipe($.imagemin())
		.pipe(gulp.dest(app.prdPath + 'image'))
		.pipe($.connect.reload());
});

// 清理任务
gulp.task('clean', function () {
	gulp.src([app.devPath, app.prdPath])
		.pipe($.clean())
		.pipe($.connect.reload());
});

gulp.task('build', ['image', 'js', 'less', 'js', 'lib', 'html', 'json']);

// 启动一个服务器，root设置读取路径,livereload:自动刷新浏览器
// watch用于监控文件
gulp.task('serve', ['build'], function () {
	$.connect.server({
		root: [app.devPath],
		livereload: true,
		port: 1234
	});
	open('http://localhost:1234');

	gulp.watch(app.srcPath + 'script/**/*.js', ['js']);
	gulp.watch('bower_components/**/*', ['lib']);
	gulp.watch(app.srcPath + '**/*.html', ['html']);
	gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
	gulp.watch(app.srcPath + 'style/**/*.less', ['less']);
	gulp.watch(app.srcPath + 'image/**/*', ['image']);
})

gulp.task('default', ['serve']);