import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default [{
	input: 'src/index.ts',
	output: {
		file: 'dist/index.js',
		format: 'umd',
		name: 'Test'
	},
	sourcemap: true,
	plugins: [
		sourcemaps(),
		typescript()
	]
}, {
	input: 'src/index.ts',
	output: {
		file: 'dist/index.min.js',
		format: 'umd',
		name: 'Test'
	},
	sourcemap: true,
	plugins: [
		sourcemaps(),
		typescript(),
		uglify()
	]
}];