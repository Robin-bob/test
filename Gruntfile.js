module.exports = function(grunt) {

  grunt.initConfig({
    cssmin: {
        my_target: {
           files: [{
              expand: true,
              cwd: 'styles/',
              src: ['*.css', '!*.min.css'],
              dest: 'styles/',
              ext: '.min.css'
        }]
      }
    },
    watch: {
      livereload: {
        options: { livereload: true },
        files: ['build/**/*'],
      },
      css: {
        files: 'styles/*.css',
        tasks: ['cssmin']
      },
      html: {
          files: ['./index.html'],
          //tasks: ['html'],
          options: {
          spawn: false
        }
      }
    },
    browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'styles/*.css',
                        './index.html'
                    ]
                },
                options: {
                  watchTask: true,
                  server: {
                  baseDir: "./",
          },
                startPath: "index.html",
                ghostMode: {
                clicks: true,
                forms: true,
                scroll: false
          }
        }
      }
    }
});
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['cssmin','browserSync','watch']);

}