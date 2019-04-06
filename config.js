module.exports = {
  // for developement
  src: './app/src',
  // for production
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
    dest: '/assets/css/'
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
  },
  // htmlhint
  htmlhint: {
    src: ['/**/*.html']
  }
};
