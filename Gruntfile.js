  module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            target: {
              files: [{
                expand: true,
                cwd: 'cssfolder',
                src: ['*.css', '!*.min.css'],
                dest: 'dest/foldercss',
                ext: '.min.css'
              }]
            }
          },

    // cssmin: {
    //     options: {
    //       mergeIntoShorthands: false,
    //       roundingPrecision: -1
    //     },
    //     target: {
    //       files: {
    //         'dest/output.css': ['src/a.css', 'src/b.css']
    //       }
    //     }
    //   },

      htmlmin: {                                  
        dist: {                                      
          options: {                                 
            removeComments: true,
            collapseWhitespace: true
          },
          files: {                               
            'dest/a.html': 'src/a.html',    
            'dest/b.html': 'src/b.html',
          }
        },
      },

      uglify: {
        my_target: {
          files: {
            'dest/uglified.min.js': ['src/a.js','src/b.js']
          }
        }
      },

    concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['src/a.js', 'src/b.js'],
          dest: 'dest/concated.js',
        },
      },

      sass: {
        dist: {
            files: {
                'dest/a.css' : 'src/a.scss'
            }
        }
    },

    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
  
    grunt.registerTask('default', ['cssmin','htmlmin','concat','sass','uglify']);
  
  };