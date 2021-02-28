export const randomNumberBetween = (num1, num2) => {
    return (
        Math.floor(Math.random() * Math.max(num1, num2)) + Math.min(num1, num2)
    );
};
