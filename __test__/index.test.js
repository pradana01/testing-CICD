const calculator = require('../index');

describe("Calculator", () => {
    let n1 = 10;
    let n2 = 5;
    let operator1 = "+";
    let operator2 = "-";
    let operator3 = "*";
    let operator4 = "/";
    let operator5 = "%";
    it("should add n1 with n2", () => {
        const result = calculator(n1, n2, operator1);
        const expected = 15;
        expect(result).toEqual(expected);
    })
    it("should minus n1 with n2", () => {
        const result = calculator(n1, n2, operator2);
        const expected = 5;
        expect(result).toEqual(expected);
    })
    it("should multiply n1 with n2", () => {
        const result = calculator(n1, n2, operator3);
        const expected = 50;
        expect(result).toEqual(expected);
    })
    it("should divide n1 with n2", () => {
        const result = calculator(n1, n2, operator4);
        const expected = 2;
        expect(result).toEqual(expected);
    })
    it("should modulo n1 with n2", () => {
        const result = calculator(n1, n2, operator5);
        const expected = 0;
        expect(result).toEqual(expected);
    })
})