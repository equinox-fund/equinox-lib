import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { babel } from '@rollup/plugin-babel'
import { DEFAULT_EXTENSIONS } from '@babel/core'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      resolve(),
      commonjs({ exclude: 'node_modules' }),
      typescript({ tsconfig: './tsconfig.json' })
      // babel({
      //   babelHelpers: 'bundled',
      //   extensions: [...DEFAULT_EXTENSIONS, '.tsx', '.ts'],
      //   presets: [
      //     [
      //       '@babel/preset-react',
      //       { runtime: 'automatic', importSource: '@emotion/react' }
      //     ]
      //   ],
      //   plugins: ['@emotion/babel-plugin']
      // })
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()]
  }
]
