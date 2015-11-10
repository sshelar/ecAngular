(function() {
    module.exports = function(grunt) {
        grunt.task.loadTasks('custom_tasks');
        require('load-grunt-tasks')(grunt);
        require('time-grunt')(grunt);
        require('./utils')(grunt).initGruntConfig();
    };

}).call(this);
