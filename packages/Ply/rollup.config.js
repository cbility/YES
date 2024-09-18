import multiInput from 'rollup-plugin-multi-input';
export default {
    input: 'dist/PlyJSScripts/**.js',
    output: {
        dir: 'dist/rollup',
        format: 'es',  // Use ES module output
    },
    plugins: [
        multiInput(),   // Allow multiple input files
    ]
};
