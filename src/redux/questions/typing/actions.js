export const ADVANCE_TYPING_STRING = "ADVANCE_TYPING_STRING";
export const SET_TYPING_CHARS = "SET_TYPING_CHARS";

const actions = {
    advance: () => ({
        type: ADVANCE_TYPING_STRING,
    }),
    setChars: ({ value }) => ({
        type: SET_TYPING_CHARS,
        payload: { value },
    }),
};

export default actions;
