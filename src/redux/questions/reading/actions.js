export const NEW_READING_QUESTION = "NEW_READING_QUESTION";
export const SET_SYMBOL_ONLY = "SET_SYMBOL_ONLY";

const actions = {
    newQuestion: () => ({
        type: NEW_READING_QUESTION,
    }),
    setMaxAnswer: ({ value }) => ({
        type: SET_SYMBOL_ONLY,
        payload: { value },
    }),
};

export default actions;
