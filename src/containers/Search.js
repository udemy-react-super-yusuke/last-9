import Search from "../components/Search";
import { connect } from "react-redux";

import getUrls from "../actions/getUrls";

// state を結びつける
const mapStateToProps = state => {
  return {
    buttonText: state.buttonText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUrls: word => {
      dispatch(getUrls(word));
    }
  };
};

// state も追加
export default connect(mapStateToProps, mapDispatchToProps)(Search);
