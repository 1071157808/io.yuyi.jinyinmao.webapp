/*!
 * jym Gruntfile
 * https://m.jinyinmao.com.cn
 */

module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        mbower: {
            copy: {
                options: {
                    cleanTargetDir: false,
                    cleanBowerDir: true,
                    copy: true,
                    install: false,
                    targetDir: './www/packages/'
                }
            },
            clean: {
                options: {
                    cleanTargetDir: true,
                    cleanBowerDir: true,
                    copy: false,
                    install: false,
                    targetDir: './www/packages/'
                }
            },
            install: {
                options: {
                    cleanTargetDir: true,
                    cleanBowerDir: true,
                    copy: true,
                    install: true,
                    targetDir: './www/packages/'
                }
            }
        },

        mimage: {
            options: {
                interlaced: true,
                optimizationLevel: 5,
                progressive: true,
                removeSource: false,
                svgoPlugins: [{
                    removeViewBox: false
                }, {
                    removeUselessStrokeAndFill: false
                }, {
                    removeEmptyAttrs: false
                }]
            },
            assets: {
                files: [{
                    expand: true,
                    cwd: 'www/assets/img/',
                    src: '**/*.{gif,GIF,jpg,jpeg,JPG,png,PNG}',
                    dest: 'www/img/'
                }]
            }
        },

        clean: {
            dist: 'dist/**/*',
            npm: 'node_modules/**/*',
            bower: 'www/lib/',
            js: 'www/app/**/*.annotated.js',
            app: 'www/js/**/*'
        },

        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: [
                    {
                        expand: true,
                        src: ['www/app/**/*.js'],
                        ext: '.annotated.js', // Dest filepaths will have this extension.
                        extDot: 'last'      // Extensions in filenames begin after the last dot
                    }
                ]
            }
        },

        jscs: {
            options: {
                config: '.jscsrc'
            },
            grunt: {
                src: ['Gruntfile.js']
            },
            app: {
                src: ['./www/app/**/*.js', './www/assets/**/*.js', '!./www/app/**/*.min.js', '!./www/assets/**/*.min.js']
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            grunt: {
                src: ['Gruntfile.js']
            },
            app: {
                src: ['./www/app/**/*.js', './www/assets/**/*.js', '!./www/app/**/*.min.js', '!./www/assets/**/*.min.js']
            }
        },

        concat: {
            options: {
                sourceMap: false
            },
            app: {
                src: ['www/app/**/*.annotated.js', 'www/assets/js/*.js'],
                dest: 'www/js/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        },

        uglify: {
            options: {
                preserveComments: false,
                sourceMap: true
            },
            app: {
                src: 'www/js/<%= pkg.name %>-<%= pkg.version %>.js',
                dest: 'www/js/<%= pkg.name %>-<%= pkg.version %>.min.js'
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 5% in CN']
            },
            core: {
                src: ['./www/assets/css/*.css', '!./www/assets/css/*.min.css']
            }
        },

        csscomb: {
            options: {
                config: '.csscomb.json'
            },
            core: {
                expand: true,
                cwd: './www/assets/css/',
                src: '**/*.css',
                dest: './www/assets/css/'
            }
        },

        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            core: {
                src: ['./www/assets/css/*.css', '!./www/assets/css/*.min.css']
            }
        },

        cssmin: {
            options: {
                compatibility: 'ie8',
                keepSpecialComments: '0',
                advanced: true
            },
            core: {
                files: [{
                    expand: true,
                    cwd: './www/assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: './www/assets/css',
                    ext: '.min.css'
                }]
            }
        },

        copy: {
            options: {
                timestamp: true
            },
            build: {
                expand: true,
                cwd: 'src/',
                src: ['css/**/*.css', 'fonts/**/**', 'js/*.js'],
                dest: 'moe_packages/moe-ui@dev/'
            },
            docs: {
                expand: true,
                cwd: 'docs/src/',
                src: ['assets/**/*', 'css/**/*', 'js/**/*', '*.ico'],
                dest: 'docs/dist'
            },
            release: {
                expand: true,
                cwd: 'moe_packages/moe-ui@dev/',
                src: '**',
                dest: 'dist/'
            },
            img: {
                expand: true,
                cwd: 'www/img/',
                src: '**/*',
                dest: 'dist/img'
            },
            js: {
                expand: true,
                cwd: 'www/img/',
                src: '**/*',
                dest: 'dist/img'
            }
        },

        exec: {
            options: {
                stdout: true,
                stderr: true
            },
            npmUpdate: {
                command: 'npm update'
            },
            npmInstall: {
                command: 'npm install'
            }
        },

        watch: {
            options: {
                debounceDelay: 5000
            },
            js: {
                files: ['Gruntfile.js', 'src/js/**/*.js'],
                tasks: []
            },
            css: {
                files: ['Gruntfile.js', 'src/less/**/*.less'],
                tasks: ['less-compile']
            },
            core: {
                files: ['Gruntfile.js', 'src/js/**/*.js', 'src/less/**/*.less', '!src/js/*.js'],
                tasks: ['build']
            },
            img: {
                files: ['assets/img/**/*.{gif,GIF,jpg,jpeg,JPG,png,PNG}'],
                tasks: ['mimage:assets']
            },
            docs: {
                files: ['docs/src/**/*.{html,json,css}'],
                tasks: ['build-docs']
            }
        }

    });

    // This command registers the default task which will install bower packages into wwwroot/lib
    grunt.registerTask('default', ['update', 'build', 'build-docs']);

    grunt.registerTask('install', ['mbower:install']);
    grunt.registerTask('update', ['exec:npmInstall', 'exec:npmUpdate', 'mbower:clean', 'install']);

    grunt.registerTask('dev', ['watch:core']);
    grunt.registerTask('dev-css', ['watch:css']);
    grunt.registerTask('dev-js', ['watch:js']);
    grunt.registerTask('dev-img', ['watch:img']);
    grunt.registerTask('dev-docs', ['watch:docs']);

    grunt.registerTask('before-compile', ['jscs:grunt', 'jshint:grunt']);
    grunt.registerTask('css-compile', ['clean:css', 'less:core', 'autoprefixer:core', 'csscomb:core', 'csslint:core', 'cssmin:core']);
    grunt.registerTask('js-compile', ['clean:js', 'jscs:core', 'jshint:core', 'concat', 'uglify']);
    grunt.registerTask('compile', ['before-compile', 'css-compile', 'js-compile']);

    grunt.registerTask('docs-css-compile', ['autoprefixer:docs', 'csscomb:docs', 'csslint:docs']);
    grunt.registerTask('docs-html-compile', ['mhandlebars:docsTmp', 'clean:docsTmp', 'clean:docsDist', 'mhandlebars:docs']);

    grunt.registerTask('build', ['clean:dev', 'compile', 'copy:build']);
    grunt.registerTask('build-docs', ['before-compile', 'docs-css-compile', 'docs-html-compile', 'copy:docs']);

    grunt.registerTask('build-usemin', [
        'useminPrepare',
        'ngAnnotate:app',
        'concat:app',
        'uglify:app',
        'usemin'
    ]);

    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt, {
        scope: 'devDependencies'
    });
    require('time-grunt')(grunt);
};
