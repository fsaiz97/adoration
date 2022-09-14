function showHowMuchILoveYou(amount) {
    if (typeof amount === 'number' && Number.isInteger(amount) && amount > 0) {
        return `I love you th${'i'.repeat(amount)}s much!`;
    } else {
        throw new Error("I hate you!");
    }
}

console.log(showHowMuchILoveYou(1));
console.log(showHowMuchILoveYou(NaN));
console.log(showHowMuchILoveYou("no"));
console.log(showHowMuchILoveYou(undefined));
console.log(showHowMuchILoveYou(-1));
console.log(showHowMuchILoveYou(3.14));
