import { personalHomepageSaga } from "../feature/personalHomepage/personalHomepageSaga";
import { all } from "redux-saga/effects"

export default function* saga() {
    yield all([
        personalHomepageSaga(),
    ]);
}