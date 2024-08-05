//to be removed
class HTTPError extends Error {
    status: number;
    statusText: string;

    constructor(status: number, statusText: string) {
        super(`HTTP Error: ${status} - ${statusText}`);
        this.name = "HTTPError";
        this.status = status;
        this.statusText = statusText;
    }
}

export default HTTPError;