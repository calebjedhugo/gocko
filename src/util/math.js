export const randomNumberBetween = (num1, num2) =>
    Math.floor(Math.random() * Math.max(num1 + 1, num2 + 1)) +
    Math.min(num1, num2);
