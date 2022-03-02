import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve"

const devMode = (process.env.NODE_ENV === 'dev');

export default [
    {
        input: './src/main.js',
        watch: {
            include: './src/**',
            clearScreen: false
        },
        output: {
            file: './dist/bundle.js',
            format: 'es',
            plugins: [
                nodeResolve(),
                terser({
                    ecma: 2020,
                    mangle: { toplevel: true },
                    compress: {
                        module: true,
                        toplevel: true,
                        unsafe_arrows: true,
                        drop_console: !devMode,
                        drop_debugger: !devMode
                    },
                    output: { quote_style: 1 }
                })
            ]
        }
    }
];