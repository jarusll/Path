export default [
    {
        input: './src/main.js',
        watch: {
            include: './src/**',
            clearScreen: false
        },
        output: {
            file: './dist/bundle.js',
            format: 'es'
        }
    }
];