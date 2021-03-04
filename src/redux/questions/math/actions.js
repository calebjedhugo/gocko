export const NEW_MATH_QUESTION = "NEW_MATH_QUESTION";
export const SET_MAX_ANSWER = "SET_MAX_ANSWER";

const actions = {
    newQuestion: () => ({
        type: NEW_MATH_QUESTION,
    }),
    setMaxAnswer: ({ value }) => ({
        type: SET_MAX_ANSWER,
        payload: { value },
    }),
};

export default actions;
