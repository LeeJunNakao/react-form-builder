import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
// import tsconfig from './tsconfig.json';
import commonjs from '@rollup/plugin-commonjs';


export default [
    {
        input: './src/index.ts',
        output: {
            file: 'dist/index.mjs'
        },
        plugins: [
            postcss({
                plugins: [],
                minimize: true,
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            external(),
            resolve(),
            typescript({
                "compilerOptions": {
                    "module": "commonjs",
                    "declaration": true,
                    "target": "es5",
                    "lib": [
                        "dom",
                        "dom.iterable",
                        "esnext"
                    ],
                    "allowJs": true,
                    "skipLibCheck": true,
                    "esModuleInterop": true,
                    "allowSyntheticDefaultImports": true,
                    "strict": true,
                    "forceConsistentCasingInFileNames": true,
                    "noFallthroughCasesInSwitch": true,
                    "moduleResolution": "node",
                    "resolveJsonModule": true,
                    "isolatedModules": true,
                    "noEmit": true,
                    "jsx": "react-jsx",
                    "baseUrl": "./",
                    "downlevelIteration": true,
                    "paths": {
                        "@src/*": [
                            "./src/*"
                        ]
                    },
                    "outDir": "./dist",
                    "rootDir": "./"
                },
            }),
            commonjs()
        ]
    }
];