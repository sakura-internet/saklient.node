module.exports = function (grunt) {
	
	var pkg = grunt.file.readJSON('package.json');

	grunt.initConfig({
		
		pkg: pkg,
		
		typescript: {
			base: {
				src: ['src/**/*.ts'],
				dest: 'lib/',
				options: {
					basePath: 'src/',
					module: 'commonjs',
					target: 'es5',
					sourceMap: false,
					declaration: false,
					comments: true
				}
			}
		},
		
		yuidoc: {
			compile: {
				name: '<%= pkg.name %>',
				description: '<%= pkg.description %>',
				version: '<%= pkg.version %>',
				url: '<%= pkg.homepage %>',
				options: {
					linkNatives: true,        
					attributesEmit: true,
					selleck: true,
					paths: ["./lib"],
					outdir: "./doc"
				}
			}
		},
		
		shell: {
			createIndex: {
				command: "./createindex.sh"
			}
		}
		
	});
	
	for (var name in pkg.devDependencies) {
		name.match(/^grunt-/) && grunt.loadNpmTasks(name);
	}
	
	grunt.registerTask('default', ['typescript','shell','yuidoc']);

};

