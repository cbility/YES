export default function checkArgs(input: { [key: string]: any }, correctInput: string[]): boolean {
    //check if input object has correct set of keys
    const inputKeys = Object.keys(input);

    if (inputKeys.length !== correctInput.length) {
        return false;
    }

    return inputKeys.every((key, index) => key === correctInput[index]);
}




