export const PUSH_MATH_HISTORY = "PUSH_MATH_HISTORY";
export const RESET_MATH_HISTORY = "RESET_MATH_HISTORY";

const actions = {
    push: (obj) => ({
        type: PUSH_MATH_HISTORY,
        payload: obj,
    }),
    reset: () => ({
        type: RESET_MATH_HISTORY,
    }),
};

export default actions;
