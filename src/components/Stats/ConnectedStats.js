import React from "react";
import LabeledIcon from "components/common/LabeledIcon";
import { connect } from "react-redux";
import mathStorageActions from "redux/storage/math/actions";
import readingStorageActions from "redux/storage/reading/actions";
import mathQuestionActions from "redux/questions/math/actions";
import readingQuestionActions from "redux/questions/reading/actions";
import { icons } from "logic/reading/questions";
import Stats from "./Stats";

const mapStateToProps = (state) => {
    const readingStorage = state.storage.reading.map(
        ({ iconOnly, question, ...rest }) => ({
            question: (() => {
                const icon = icons[question];
                if (iconOnly) {
                    return icon;
                }
                return <LabeledIcon text={question} icon={icon} />;
            })(),
            ...rest,
        })
    );
    return {
        storage: { math: state.storage.math, reading: readingStorage },
        mathMaxAnswer: state.questions.math.maxAnswer,
        readingIconOnly: state.questions.reading.iconOnly,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        reset: {
            math: () => dispatch(mathStorageActions.reset()),
            reading: () => {
                dispatch(readingStorageActions.reset());
            },
        },
        setMathMaxAnswer: ({ target: { value } }) =>
            dispatch(mathQuestionActions.setMaxAnswer({ value })),
        setReadingIconOnly: ({ target: { checked } }) =>
            dispatch(readingQuestionActions.setMaxAnswer({ value: checked })),
    };
};

const ConnectedStats = connect(mapStateToProps, mapDispatchToProps)(Stats);

export default ConnectedStats;
