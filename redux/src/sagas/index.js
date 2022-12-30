import { all, takeLatest, put } from "redux-saga/effects";

function* fetchNews() {
  const response = yield fetch(
    `http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-21&sortBy=publishedAt&apiKey=YOUR_API_KEY`
  ).then(response => response.json());

  yield put({
    type: "NEWS_RECEIVED",
    payload: response.articles
  });
}

function* actionWatcher() {
  yield takeLatest("FETCH_NEWS", fetchNews);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}