import { connect } from "react-redux";
import mathStorageActions from "redux/storage/math/actions";
import Stats from "./Stats";

const mapStateToProps = (state) => {
    return { storage: state.storage };
};

const mapDispatchToProps = (dispatch) => {
    return { reset: { math: () => dispatch(mathStorageActions.reset()) } };
};

const ConnectedStats = connect(mapStateToProps, mapDispatchToProps)(Stats);

export default ConnectedStats;
