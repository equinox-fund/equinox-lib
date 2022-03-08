import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { babel } from '@rollup/plugin-babel'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import postcss from 'rollup-plugin-postcss'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const packageJson = require('./package.json')

const extensions = [...DEFAULT_EXTENSIONS, '.tsx', '.ts']

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
    external: ['react'],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        config: {
          file: './postcss.config.js'
        }
      }),
      babel({
        babelHelpers: 'bundled',
        include: ['src/**/*'],
        extensions
      })
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/]
  }
]
