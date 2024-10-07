import fs from 'fs';
import path from 'path';

// get all JavaScript files from the input directory and subdirectories
function getAllFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);

    list.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat && stat.isDirectory()) {
            // Recursively add files from subdirectories
            results = results.concat(getAllFiles(filePath));
        } else if (path.extname(file) === '.js') {
            // Only include JavaScript files
            results.push(filePath);
        }
    });

    return results;
}

// Get all JavaScript files in the 'dist/scripts' directory
const inputDir = './dist/scripts';
const inputFiles = getAllFiles(inputDir);

export default inputFiles.map((inputFile) => {
    const relativePath = path.relative(inputDir, inputFile);
    const outputFileName = relativePath.replace(/\.js$/, '.bundle.js'); // Transform 'file.js' to 'file.bundle.js'

    return {
        input: inputFile,
        output: {
            file: path.join('rollup', outputFileName), // Output path to 'rollup/' directory
            format: 'es', //allows top level await
            name: path.basename(outputFileName, '.js'),
            sourcemap: true,
        },
        plugins: [],
    };
});
