export const PUSH_READING_HISTORY = "PUSH_READING_HISTORY";
export const RESET_READING_HISTORY = "RESET_READING_HISTORY";

const actions = {
    push: (obj) => ({
        type: PUSH_READING_HISTORY,
        payload: obj,
    }),
    reset: () => ({
        type: RESET_READING_HISTORY,
    }),
};

export default actions;
