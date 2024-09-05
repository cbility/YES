const ukPostalCodePattern = /\b(GIR 0AA|[A-PR-UWYZ]([0-9]{1,2}|([A-HK-Y][0-9]([0-9ABEHMNPRV-Y])?)|[0-9][A-HJKPS-UW])\s?[0-9][ABD-HJLNP-UW-Z]{2})\b/gi;

export default function extractPostcodeFromAddress(address: string) {
    const addressLines = address.split(",");
    let postcode: string | undefined = undefined;
    ukPostalCodePattern.lastIndex = 0;
    for (let i = addressLines.length - 1; i >= 0; i--) {
        if (ukPostalCodePattern.test(addressLines[i])) {
            postcode = addressLines[i];
            addressLines.splice(i, 1);
            break;
        }
    }
    return { modifiedAddress: addressLines.map(line => line?.trim()).join(", "), postcode };
}