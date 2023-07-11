export const PUSH_COUNTING_HISTORY = "PUSH_COUNTING_HISTORY";
export const RESET_COUNTING_HISTORY = "RESET_COUNTING_HISTORY";

const actions = {
    push: (obj) => ({
        type: PUSH_COUNTING_HISTORY,
        payload: obj,
    }),
    reset: () => ({
        type: RESET_COUNTING_HISTORY,
    }),
};

export default actions;
