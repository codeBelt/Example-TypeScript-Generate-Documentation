module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        // This will load in our package.json file so we can have access
        // to the project name and version number.
        pkg: grunt.file.readJSON('package.json'),

        // Constants for the Gruntfile so we can easily change the path for
        // our environments.
        BASE_PATH: '../',
        DEVELOPMENT_PATH: '../dev/',

        yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                url: '<%= pkg.homepage %>',
                options: {
                    extension: '.ts',
                    paths: '<%= DEVELOPMENT_PATH %>' + 'scripts/',
                    outdir: '<%= BASE_PATH %>' + 'docs/'
                }
            }
        }

    });


    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-yuidoc');

    // Default task.
    grunt.registerTask('default', ['yuidoc']);

};
