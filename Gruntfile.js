    module.exports = function(grunt) {

        // 1. All configuration goes here 
        grunt.initConfig({
                pkg: grunt.file.readJSON('package.json'),
                uncss: {
                    dist: {
                        files: {
                            'dist/cleaned-css/tidy.css': ['dev/index.html']
                        }
                    }
                }
           
        });


    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-uncss');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['uncss']);
    

    };