// Rollup plugins
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'dist/tsc/src/index.js',
    output: {
        file: 'dist/final/main.min.js',
        format: 'cjs',
        sourcemap: 'inline',
        exports: 'default'
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled'
        }),
    ],
    external: ['express']
};