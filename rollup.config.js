import fs from "fs";
import path from "path";
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import tsconfig from './tsconfig.json';
import commonjs from '@rollup/plugin-commonjs';
const packageJson = require("./package.json");


const dateFnsDirs = fs
    .readdirSync(path.join(".", "node_modules", "date-fns"))
    .map((d) => `date-fns/${d}`);


export default [
    {
        input: './src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                name: "DatePicker",
            },
            {
                file: packageJson.module,
                format: "es",
            },
        ],
        plugins: [
            postcss({
                plugins: [],
                minimize: true,
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            peerDepsExternal(),
            resolve({
                mainFields: ["module"],
                extensions: [".js", ".jsx"],
            }),
            typescript(tsconfig),
            commonjs(),
        ],
        external: Object.keys(packageJson.dependencies)
            .concat(Object.keys(packageJson.peerDependencies))
            .concat(dateFnsDirs),
    },
];