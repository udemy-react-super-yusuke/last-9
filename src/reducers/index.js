import { combineReducers } from "redux";

import imageUrls from "./imageUrls";
// 新たな reducer をコンバインする
import buttonText from "./buttonText";

export default combineReducers({ imageUrls, buttonText });
