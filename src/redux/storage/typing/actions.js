export const PUSH_TYPING_HISTORY = "PUSH_TYPING_HISTORY";
export const RESET_TYPING_HISTORY = "RESET_TYPING_HISTORY";

const actions = {
    push: (obj) => ({
        type: PUSH_TYPING_HISTORY,
        payload: obj,
    }),
    reset: () => ({
        type: RESET_TYPING_HISTORY,
    }),
};

export default actions;
