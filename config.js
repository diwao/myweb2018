module.exports = {
  // 開発ディレクトリ
  src: './app/src',
  // 納品物ディレクトリ
  dest: './app/dist',
  // pug
  pug: {
    src: '/pug/**/*.pug',
    exclude: '/pug/**/_*.pug',
    dest: '/'
  },
  // sass
  sass: {
    src: '/scss/**/*.scss',
    dest: '/assets/css/',
    options: {
      outputStyle: 'compressed',
      sourceMap: true,
      sourceComment: false
    }
  },
  // autoprefixer
  autoprefixerOptions: {
    browsers: ['last 3 version', 'ie >= 9', 'Android 4.0']
  },
  //babel
  babel: {
    src: '/js/**/*.js',
    dest: '/assets/js/'
  },
  //imagemin
  imagemin: {
    src: '/images/**/*',
    dest: '/assets/images/'
  }
};
