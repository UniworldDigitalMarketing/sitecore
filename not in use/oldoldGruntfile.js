module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uncss: {
            dist: {
                files: {
                    'cleaned-css/tidy.css': ['index.html']
                }
            }
        },
      //  cssnano: {
      //      options: {
      //          sourcemap: true
      //      },
      //      dist: {
      //          files: {
      //              'cleaned-css/tidy.css': 'cleaned-css/tidy.css'
      //          }
      //      }
      //  },
        postcss: {
            options: {
                map: true, // inline sourcemaps
                },

                processors: [
                    require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: 'css/site-base.css'
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-cssnano');
    grunt.loadNpmTasks('grunt-postcss')



    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['uncss']);
    grunt.registerTask('build', ['uncss', 'postcss']);

};