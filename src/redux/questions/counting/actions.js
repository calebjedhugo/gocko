export const NEW_COUNTING_QUESTION = "NEW_COUNTING_QUESTION";
export const SET_MAX_COUNTING_ANSWER = "SET_MAX_COUNTING_ANSWER";

const actions = {
    newQuestion: () => ({
        type: NEW_COUNTING_QUESTION,
    }),
    setMaxAnswer: ({ value }) => ({
        type: SET_MAX_COUNTING_ANSWER,
        payload: { value },
    }),
};

export default actions;
