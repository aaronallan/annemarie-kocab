'use strict';

module.exports = function(grunt) {

	grunt.initConfig({

	 	/* Get package meta data */
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/style.css' : 'scss/style.scss'
				}
			}
		},
		concat: {

		    libs: {
		        src: [
		            './node_modules/jquery/dist/jquery.min.js',
		            './node_modules/underscore/underscore-min.js',
		            './node_modules/backbone/backbone-min.js'
		        ],
		        dest: './build/libs-production.js',
		    },

		    functions: {
		        src: [
		            './js/ApplicationRouter.js',
		            './js/templateManager.js',
		            './js/Backbone.View.js',
		            './js/ContentPaneView.js',
		            './js/functions.js'

		        ],
		        dest: './build/production.js',
		    }
		},
		uglify: {
		    options: {
		      mangle: false
		    },
		    my_target: {
		      files: {
		        './build/libs-production-min.js': ['./build/libs-production.js'],
		        './build/production-min.js': ['./build/production.js'],

		      }
		    }
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
			js: {
				files: 'js/*.js',
				tasks: ['concat', 'uglify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('compile', [
	  'sass',
	  'concat',
	  'uglify',
	  'watch'
	]);
};
