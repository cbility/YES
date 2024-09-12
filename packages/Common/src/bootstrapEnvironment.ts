export default function bootstrapEnvironment() {
    if (process.env.NODE_ENV !== "production") {
        const dotenv = require('dotenv');
        const path = require('path');
        const { fileURLToPath } = require('url');
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const relativeDotenvPath = "../../../.env";
        const resolvedDotenvPath = path.resolve(__dirname, relativeDotenvPath);
        const result = dotenv.config({ path: resolvedDotenvPath });
        if (result.error) throw result.error;
        return result;
    }
}
