const { showHowMuchILoveYou } = require("./adoration");

describe("adoration module testing", () => {
    describe("showHowMuchILoveYou tests", () => {
        it("Exists", () => {
            expect(showHowMuchILoveYou).toBeDefined();
        }),

        it("Is a function", () => {
            expect(showHowMuchILoveYou instanceof Function).toEqual(true);
        }),

        it("Returns a string with correct number of 'i's", () => {
            expect(showHowMuchILoveYou(5)).toBe("I love you thiiiiis much!");
        }),

        it("Throws an error when passed a string", () => {
            expect(() => {
                showHowMuchILoveYou("with all my heart")
            }).toThrow(new Error("I hate you"));
        })
    })
})
