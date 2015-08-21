/*!
 * jym Gruntfile
 * https://m.jinyinmao.com.cn
 */

module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        autoprefixer: {
            options: {
                browsers: ['last 3 versions', 'ie 8', 'ie 9', '> 5% in CN']
            },
            app: {
                src: ['www/assets/css/*.css', '!./www/assets/css/*.min.css']
            }
        },

        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: ['pkg'],
                commit: false,
                commitMessage: '%VERSION%',
                commitFiles: ['package.json'],
                createTag: false,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: false,
                pushTo: 'upstream',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                globalReplace: false,
                prereleaseName: false,
                regExp: false
            }
        },

        clean: {
            app: ['publish/app/assets/**/*', 'publish/app/packages/**/*', 'publish/platforms/**/*', 'publish/app/*.html', 'publish/app/*.json'],
            bower: 'www/lib/',
            dist: 'dist/**/*',
            js: ['www/app/**/*.annotated.js'],
            npm: 'node_modules/**/*'
        },

        copy: {
            options: {
                timestamp: true
            },
            config: {
                src: 'www/config.json',
                dest: 'dist/config@<%= pkg.version %>.json'
            },
            css: {
                src: 'www/assets/css/style.css',
                dest: 'dist/assets/css/style@<%= pkg.version %>.css'
            },
            favicon: {
                src: 'www/favicon.ico',
                dest: 'dist/favicon.ico'
            },
            fonts: {
                expand: true,
                cwd: 'www/assets/fonts/',
                src: ['**/*'],
                dest: 'dist/assets/fonts/'
            },
            img: {
                expand: true,
                cwd: 'www/assets/img/',
                src: ['**/*', '!precompressed', '!precompressed/**/*'],
                dest: 'dist/assets/img/'
            },
            icon: {
                expand: true,
                cwd: 'www/assets/icon/',
                src: ['**/*', '!precompressed', '!precompressed/**/*'],
                dest: 'dist/assets/icon/'
            },
            html: {
                src: 'dist/<%= pkg.name %>@<%= pkg.version %>-dev.html',
                dest: 'dist/index.html'
            },
            htmlStatus: {
                src: 'www/status.html',
                dest: 'dist/status.html'
            },
            htmlLanding: {
                expand: true,
                cwd: 'www/activities/',
                src: ['**/*'],
                dest: 'dist/activities/'
            },
            htmlDev: {
                src: 'www/index.html',
                dest: 'dist/<%= pkg.name %>@<%= pkg.version %>-dev.html'
            },
            htmlTest: {
                src: 'www/index.html',
                dest: 'dist/<%= pkg.name %>@<%= pkg.version %>-test.html'
            },
            htmlProduct: {
                src: 'www/index.html',
                dest: 'dist/<%= pkg.name %>@<%= pkg.version %>.html'
            },
            packages: {
                expand: true,
                cwd: 'www/packages/',
                src: ['**/*'],
                dest: 'dist/packages/'
            },
            release: {
                expand: true,
                cwd: 'dist/',
                src: ['**/*'],
                dest: 'publish/jym-web-m/'
            },
            deployToDev: {
                expand: true,
                cwd: 'publish/jym-web-m/',
                src: ['**/*'],
                dest: 'publish/jym-web-dev-m/'
            },
            app: {
                expand: true,
                cwd: 'dist/',
                src: ['*', 'packages/**/*', 'assets/js/*.min.js', 'assets/css/*.min.css', 'assets/fonts/**/*', 'assets/icon/**/*', 'assets/img/**/*', '!Activities/', '!Activities', '!activities/', '!activities', '!Activities/**/*'],
                dest: 'publish/app/www/'
            }
        },

        compress: {
            appRelease: {
                options: {
                    archive: 'publish/jym-app@<%= pkg.version %>.zip'
                },
                expand: true,
                cwd: 'publish/app/',
                src: ['**/*'],
                dest: '.'
            },
            release: {
                options: {
                    archive: 'publish/jym-web-m@<%= pkg.version %>.zip'
                },
                expand: true,
                cwd: 'publish/jym-web-m/',
                src: ['**/*'],
                dest: '.'
            }
        },

        csscomb: {
            options: {
                config: '.csscomb.json'
            },
            app: {
                expand: true,
                cwd: 'www/assets/css/',
                src: ['**/*.css', '!**/*.min.css'],
                dest: 'www/assets/css/'
            }
        },

        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            app: {
                src: ['www/assets/css/*.css', '!www/assets/css/*.min.css']
            }
        },

        cssmin: {
            options: {
                compatibility: 'ie8',
                keepSpecialComments: '0',
                advanced: true
            },
            dev: {
                files: {
                    'dist/assets/css/<%= pkg.name %>@<%= pkg.version %>-dev.min.css': ['dist/assets/css/*.css']
                }
            },
            test: {
                files: {
                    'dist/assets/css/<%= pkg.name %>@<%= pkg.version %>-test.min.css': ['dist/assets/css/*.css']
                }
            },
            product: {
                files: {
                    'dist/assets/css/<%= pkg.name %>@<%= pkg.version %>.min.css': ['dist/assets/css/*.css']
                }
            }
        },

        concat: {
            options: {
                sourceMap: false
            },
            dev: {
                src: ['www/app/**/*.annotated.js', 'www/assets/js/*.js'],
                dest: 'dist/assets/js/<%= pkg.name %>@<%= pkg.version %>-dev.js'
            },
            test: {
                src: ['www/app/**/*.annotated.js', 'www/assets/js/*.js'],
                dest: 'dist/assets/js/<%= pkg.name %>@<%= pkg.version %>-test.js'
            },
            product: {
                src: ['www/app/**/*.annotated.js', 'www/assets/js/*.js'],
                dest: 'dist/assets/js/<%= pkg.name %>@<%= pkg.version %>.js'
            }
        },

        exec: {
            options: {
                stdout: true,
                stderr: true
            },
            npmInstall: {
                command: 'npm install'
            },
            npmUpdate: {
                command: 'npm update --save-dev'
            }
        },

        filerev: {
            options: {
                algorithm: 'md5',
                length: 6
            },
            fonts: {
                src: 'www/assets/fonts/**'
            }
        },

        html2js: {
            options: {
                base: 'www',
                htmlmin: {
                    collapseBooleanAttributes: false,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: false,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                },
                module: 'jym.templates'
            },
            app: {
                src: ['www/app/**/*.tpl.html'],
                dest: 'www/app/common/templates.js'
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
                src: ['./www/app/**/*.js', './www/assets/**/*.js', '!./www/app/**/*.min.js', '!./www/assets/**/*.min.js', '!./www/app/common/templates.js']
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
                src: ['./www/app/**/*.js', './www/assets/**/*.js', '!./www/app/**/*.min.js', '!./www/assets/**/*.min.js', '!./www/app/common/templates.js']
            }
        },

        mbower: {
            copy: {
                options: {
                    cleanTargetDir: true,
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
                removeSource: true,
                progressive: true,
                svgoPlugins: [{
                    removeViewBox: false
                }, {
                    removeUselessStrokeAndFill: false
                }, {
                    removeEmptyAttrs: false
                }]
            },
            icon: {
                files: [{
                    expand: true,
                    cwd: 'www/assets/icon/precompressed/',
                    src: '**/*.{gif,GIF,jpg,jpeg,JPG,png,PNG}',
                    dest: 'www/assets/icon/'
                }]
            },
            img: {
                files: [{
                    expand: true,
                    cwd: 'www/assets/img/precompressed/',
                    src: '**/*.{gif,GIF,jpg,jpeg,JPG,png,PNG}',
                    dest: 'www/assets/img/'
                }]
            }
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

        replace: {
            dev: {
                src: ['www/app/common/constants.js'],
                overwrite: true,
                replacements: [{
                    from: 'jymstoretest',
                    to: 'jymstoredev'
                }, {
                    from: 'jymstoreproduct',
                    to: 'jymstoredev'
                }, {
                    from: 'jym-test-api',
                    to: 'jym-dev-api'
                }, {
                    from: 'jym-product-api',
                    to: 'jym-dev-api'
                }, {
                    from: /VERSION: .+/,
                    to: 'VERSION: \'<%= pkg.version %>-DEV\','
                }, {
                    from: 'ENV: \'test\'',
                    to: 'ENV: \'dev\''
                }, {
                    from: 'ENV: \'product\'',
                    to: 'ENV: \'dev\''
                }]
            },
            test: {
                src: ['www/app/common/constants.js'],
                overwrite: true,
                replacements: [{
                    from: 'jymstoredev',
                    to: 'jymstoretest'
                }, {
                    from: 'jymstoreproduct',
                    to: 'jymstoretest'
                }, {
                    from: 'jym-dev-api',
                    to: 'jym-test-api'
                }, {
                    from: 'jym-product-api',
                    to: 'jym-test-api'
                }, {
                    from: /VERSION: .+/,
                    to: 'VERSION: \'<%= pkg.version %>-TEST\','
                }, {
                    from: 'ENV: \'dev\'',
                    to: 'ENV: \'test\''
                }, {
                    from: 'ENV: \'product\'',
                    to: 'ENV: \'test\''
                }]
            },
            product: {
                src: ['www/app/common/constants.js'],
                overwrite: true,
                replacements: [{
                    from: 'jymstoredev',
                    to: 'jymstoreproduct'
                }, {
                    from: 'jymstoretest',
                    to: 'jymstoreproduct'
                }, {
                    from: 'jym-dev-api',
                    to: 'jym-product-api'
                }, {
                    from: 'jym-test-api',
                    to: 'jym-product-api'
                }, {
                    from: /VERSION: .+/,
                    to: 'VERSION: \'<%= pkg.version %>\','
                }, {
                    from: 'ENV: \'dev\'',
                    to: 'ENV: \'test\''
                }, {
                    from: 'ENV: \'test\'',
                    to: 'ENV: \'product\''
                }]
            },
            buildDev: {
                src: ['dist/<%= pkg.name %>@<%= pkg.version %>-dev.html'],
                overwrite: true,
                replacements: [{
                    from: 'jym@version',
                    to: 'jym@<%= pkg.version %>-dev'
                }]
            },
            buildTest: {
                src: ['dist/<%= pkg.name %>@<%= pkg.version %>-test.html'],
                overwrite: true,
                replacements: [{
                    from: 'jym@version',
                    to: 'jym@<%= pkg.version %>-test'
                }]
            },
            buildProduct: {
                src: ['dist/<%= pkg.name %>@<%= pkg.version %>.html'],
                overwrite: true,
                replacements: [{
                    from: 'jym@version',
                    to: 'jym@<%= pkg.version %>'
                }]
            }
        },

        uglify: {
            options: {
                preserveComments: false,
                sourceMap: true
            },
            dev: {
                src: 'dist/assets/js/<%= pkg.name %>@<%= pkg.version %>-dev.js',
                dest: 'dist/assets/js/<%= pkg.name %>@<%= pkg.version %>-dev.min.js'
            },
            test: {
                src: 'dist/assets/js/<%= pkg.name %>@<%= pkg.version %>-test.js',
                dest: 'dist/assets/js/<%= pkg.name %>@<%= pkg.version %>-test.min.js'
            },
            product: {
                src: 'dist/assets/js/<%= pkg.name %>@<%= pkg.version %>.js',
                dest: 'dist/assets/js/<%= pkg.name %>@<%= pkg.version %>.min.js'
            }
        },

        useminPrepare: {
            cssDev: 'dist/<%= pkg.name %>@<%= pkg.version %>-dev.html',
            cssTest: 'dist/<%= pkg.name %>@<%= pkg.version %>-test.html',
            cssProduct: 'dist/<%= pkg.name %>@<%= pkg.version %>.html',
            jsDev: 'dist/<%= pkg.name %>@<%= pkg.version %>-dev.html',
            jsTest: 'dist/<%= pkg.name %>@<%= pkg.version %>-test.html',
            jsProduct: 'dist/<%= pkg.name %>@<%= pkg.version %>.html'
        },

        usemin: {
            cssDev: 'dist/<%= pkg.name %>@<%= pkg.version %>-dev.html',
            cssTest: 'dist/<%= pkg.name %>@<%= pkg.version %>-test.html',
            cssProduct: 'dist/<%= pkg.name %>@<%= pkg.version %>.html',
            jsDev: 'dist/<%= pkg.name %>@<%= pkg.version %>-dev.html',
            jsTest: 'dist/<%= pkg.name %>@<%= pkg.version %>-test.html',
            jsProduct: 'dist/<%= pkg.name %>@<%= pkg.version %>.html'
        },


        watch: {
            options: {
                debounceDelay: 20000
            },
            dev: {
                files: ['www/app/**/*', 'www/assets/css/**/*.css', 'www/assets/js/**/*/js', 'www/assets/img/precompressed/**/*', 'www/assets/icon/precompressed/**/*', '!www/app/common/templates.js'],
                tasks: ['dev']
            },
            templates: {
                files: ['www/app/**/*.tpl.html'],
                tasks: ['dev-templates']
            },
            img: {
                files: ['www/assets/img/precompressed/**/*', 'www/assets/icon/precompressed/**/*'],
                tasks: ['compresse-icon', 'compresse-image']
            }
        }
    });

    // This command registers the default task which will install bower packages into wwwroot/lib
    grunt.registerTask('default', ['watch:dev']);
    grunt.registerTask('templates', ['watch:templates']);

    grunt.registerTask('prepare', ['exec:npmUpdate', 'mbower:clean', 'mbower:install']);

    grunt.registerTask('compresse-icon', ['mimage:icon']);
    grunt.registerTask('compresse-image', ['mimage:img']);

    grunt.registerTask('compile-templates', ['html2js:app']);

    grunt.registerTask('dev', ['dev-css', 'dev-icon', 'dev-img', 'dev-js', 'compile-templates']);
    grunt.registerTask('dev-css', ['autoprefixer:app', 'csscomb:app', 'csslint:app']);
    grunt.registerTask('dev-icon', ['compresse-icon']);
    grunt.registerTask('dev-img', ['compresse-image']);
    grunt.registerTask('dev-js', ['jscs:app', 'jshint:app']);
    grunt.registerTask('dev-templates', ['compile-templates']);

    grunt.registerTask('prepare-build', ['clean:app', 'clean:dist', 'jscs:grunt', 'jshint:grunt', 'clean:dist', 'bump']);

    grunt.registerTask('pre-dev-build', ['replace:dev']);
    grunt.registerTask('pre-test-build', ['replace:test']);
    grunt.registerTask('pre-product-build', ['replace:product']);
    grunt.registerTask('post-dev-build', ['replace:buildDev']);
    grunt.registerTask('post-test-build', ['replace:buildTest']);
    grunt.registerTask('post-product-build', ['replace:buildProduct']);

    grunt.registerTask('build-config', ['copy:config']);
    grunt.registerTask('build-fonts', ['copy:fonts']);
    grunt.registerTask('build-html', ['copy:htmlStatus', 'copy:htmlLanding', 'copy:htmlDev', 'copy:htmlTest', 'copy:htmlProduct']);
    grunt.registerTask('build-icon', ['copy:icon', 'copy:favicon']);
    grunt.registerTask('build-img', ['copy:img']);
    grunt.registerTask('build-packages', ['copy:packages']);
    grunt.registerTask('build-js', ['clean:js', 'jscs:app', 'jshint:app', 'html2js:app', 'ngAnnotate:app', 'useminPrepare:js', 'concat:app', 'uglify:app', 'usemin:js', 'clean:js']);

    grunt.registerTask('build-js-dev', ['clean:js', 'replace:dev', 'jscs:app', 'jshint:app', 'html2js:app', 'ngAnnotate:app', 'useminPrepare:jsDev', 'concat:dev', 'uglify:dev', 'usemin:jsDev', 'clean:js']);
    grunt.registerTask('build-css-dev', ['autoprefixer:app', 'csscomb:app', 'csslint:app', 'copy:css', 'useminPrepare:cssDev', 'cssmin:dev', 'usemin:cssDev']);
    grunt.registerTask('build-dev', ['pre-dev-build', 'build-js-dev', 'build-css-dev', 'post-dev-build']);

    grunt.registerTask('build-js-test', ['clean:js', 'replace:test', 'jscs:app', 'jshint:app', 'html2js:app', 'ngAnnotate:app', 'useminPrepare:jsTest', 'concat:test', 'uglify:test', 'usemin:jsTest', 'clean:js']);
    grunt.registerTask('build-css-test', ['useminPrepare:cssTest', 'autoprefixer:app', 'csscomb:app', 'csslint:app', 'copy:css', 'cssmin:test', 'usemin:cssTest']);
    grunt.registerTask('build-test', ['pre-test-build', 'build-js-test', 'build-css-test', 'post-test-build']);

    grunt.registerTask('build-js-product', ['clean:js', 'replace:product', 'jscs:app', 'jshint:app', 'html2js:app', 'ngAnnotate:app', 'useminPrepare:jsProduct', 'concat:product', 'uglify:product', 'usemin:jsProduct', 'clean:js']);
    grunt.registerTask('build-css-product', ['useminPrepare:cssProduct', 'autoprefixer:app', 'csscomb:app', 'csslint:app', 'copy:css', 'cssmin:product', 'usemin:cssProduct']);
    grunt.registerTask('build-product', ['pre-product-build', 'build-js-product', 'build-css-product', 'post-product-build']);

    grunt.registerTask('build', ['prepare-build', 'build-config', 'build-fonts', 'build-html', 'build-icon', 'build-img', 'build-packages', 'build-dev', 'build-test', 'build-product', 'copy:html', 'to-dev']);

    grunt.registerTask('release', ['copy:release', 'clean:app', 'copy:app', 'compress', 'copy:deployToDev']);

    grunt.registerTask('to-dev', ['pre-dev-build']);
    grunt.registerTask('to-test', ['pre-test-build']);
    grunt.registerTask('to-product', ['pre-product-build']);

    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt, {
        scope: 'devDependencies'
    });
    require('time-grunt')(grunt);
};
