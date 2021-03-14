export const randomNumberBetween = (num1Arg, num2Arg) => {
    const num1 = Number(num1Arg);
    const num2 = Number(num2Arg);
    return (
        Math.floor(Math.random() * Math.max(num1 + 1, num2 + 1)) +
        Math.min(num1, num2)
    );
};
