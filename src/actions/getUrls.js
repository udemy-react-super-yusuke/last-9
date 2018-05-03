import giphyAPI from "../APIs/giphyAPI";

// リクエスト開始用のアクションを作成するクリエイター
const startRequest = () => {
  return {
    type: "START_REQUEST"
  };
};

const receiveData = data => {
  return {
    type: "RECEIVE_DATA",
    payload: data
  };
};

const getUrls = word => {
  return dispatch => {
    // リクエスト直前に実行
    dispatch(startRequest());
    giphyAPI(word).then(res => {
      const data = res.data.data;
      const imageUrlList = data.map(item => item.images.downsized.url);
      dispatch(receiveData(imageUrlList));
    });
  };
};

export default getUrls;
