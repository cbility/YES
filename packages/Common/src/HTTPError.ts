export default class HTTPError extends Error {
    status: number;
    statusText: string;

    constructor(status: number, statusText: string, message?: string) {
        if (message) {
            super(`HTTP Error: ${status} - ${statusText} - ${message}`);
        } else {
            super(`HTTP Error: ${status} - ${statusText}`);
        }
        this.name = "HTTPError";
        this.status = status;
        this.statusText = statusText;
        this.message = message ?? "";
    }
}