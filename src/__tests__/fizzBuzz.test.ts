import { fizzBuzz } from "../fizzBuzz";

describe("fizz buzz", () => {
  it("should print once.", () => {
    const number = 1;
    expect(fizzBuzz(number)).toBe(number.toString());
  });

  it("should return number if current number is not divisible by 3 or 5.", () => {
    const number = 2;
    expect(fizzBuzz(number)).toBe(number.toString());
  });

  it("should return 'fizz' if current number divisible by 3.", () => {
    expect(fizzBuzz(3)).toBe("fizz");
  });

  it("should return 'buzz' if current number divisible by 5.", () => {
    expect(fizzBuzz(5)).toBe("buzz");
  });

  it("should print 'fizzbuzz' if current number is divisible by both 3 and 5.", () => {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
  });
});
