import fs from "fs";
import path from "path";
import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import tsconfig from './tsconfig.json';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts'
import pkg from './package.json';


export default [{
    input: './src/index.ts',
    output: [
        {
            file: './lib/cjs/index.js',
            format: 'cjs',
        },
        {
            file: './lib/esm/index.js',
            format: 'es',
        }
    ],
    external: [...Object.keys(pkg.peerDependencies || {})],
    plugins: [
        nodeResolve({
            mainFields: ["module"],
            extensions: [".js", ".jsx"],
        }),
        commonjs(),
        typescript({
            typescript: require('typescript'),
        }),
        postcss({
            plugins: [require('autoprefixer')],
        }),
        peerDepsExternal(),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react']
        }),
        commonjs(),
    ]
},
{
    input: './src/utils/validator/validation.ts',
    output: [
        {
            file: './validation/index.d.ts',
        }
    ],
    plugins: [dts()]
},
{
    input: "./src/index.d.ts",
    output: [
        { file: pkg.types }
    ],
    plugins: [dts()]
}
]
