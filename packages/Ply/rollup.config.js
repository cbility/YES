import fs from 'fs';
import path from 'path';

// Function to recursively get all JavaScript files from the input directory and subdirectories
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

// Get all JavaScript files in the 'src' directory
const inputDir = './dist';  // Specify your source directory here
const inputFiles = getAllFiles(inputDir);

export default inputFiles.map((inputFile) => {
    const relativePath = path.relative(inputDir, inputFile);
    const outputFileName = relativePath.replace(/\.js$/, '.bundle.js'); // Transform 'file.js' to 'file.bundle.js'

    return {
        input: inputFile, // Each file is its own input
        output: {
            file: path.join('rollup', outputFileName), // Output path to 'dist/' directory
            format: 'es', // Use 'iife' format
            name: path.basename(outputFileName, '.js'), // Name for the global variable
            sourcemap: true,
        },
        plugins: [], // Add any plugins here if needed
    };
});
