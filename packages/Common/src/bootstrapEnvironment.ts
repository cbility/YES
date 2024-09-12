import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

export default function bootstrapEnvironment() {
    if (process.env.NODE_ENV !== "production") {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const relativeDotenvPath = "../../../.env";
        const resolvedDotenvPath = path.resolve(__dirname, relativeDotenvPath);
        const result = dotenv.config({ path: resolvedDotenvPath });
        if (result.error) throw result.error;
        return result;
    }
}
