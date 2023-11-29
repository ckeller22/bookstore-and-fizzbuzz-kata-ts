export function fizzBuzz(number: number): string {
  const FIZZ = "fizz";
  const BUZZ = "buzz";

  const isDivisibleBy3 = number % 3 == 0;
  const isDivisibleBy5 = number % 5 == 0;

  if (isDivisibleBy3 && isDivisibleBy5) {
    return `${FIZZ}${BUZZ}`;
  }

  if (isDivisibleBy3) {
    return FIZZ;
  }

  if (isDivisibleBy5) {
    return BUZZ;
  }
  return number.toString();
}
