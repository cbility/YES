export default async function bootstrapEnvironment() {
    if (process.env.NODE_ENV !== "production") {
        const dotenv = await import('dotenv');
        const path = await import('path');
        const { fileURLToPath } = await import('url');
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const relativeDotenvPath = "../../../.env";
        const resolvedDotenvPath = path.resolve(__dirname, relativeDotenvPath);
        const result = dotenv.config({ path: resolvedDotenvPath });
        if (result.error) throw result.error;
        return result;
    }
}
