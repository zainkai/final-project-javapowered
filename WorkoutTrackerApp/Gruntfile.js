module.exports = function(grunt) {

    

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        handlebars: {
            compile:{
                options: {
                    namespace: "content.Scripts"
                },
                files: {
                    "content/Scripts/sport-row-template.js": "views/partials/sport-table-row.handlebars",
                    "content/Scripts/weight-row-template.js": "views/partials/weight-table-row.handlebars"
                }
            }
        },

        bower: {
            dev: {
                dest: "content/",
                css_dest: "content/CSS",
                js_dest: "content/Scripts",
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-bower');

    grunt.registerTask('default', ["handlebars","bower"])
}

