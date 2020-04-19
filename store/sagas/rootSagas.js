import { all } from "redux-saga/effects";
import isFunction from "lodash/fp/isFunction";

import userAuthSagas from "../../main/containers/Pages/UserAuth/sagas";
import productListSagas from "../../main/containers/PLP/sagas";

export const runSagas = (sagas) => {
	if (Array.isArray(sagas)) {
		return sagas.map((saga) => saga());
	}

	if (isFunction(sagas)) {
		return Array.of(sagas());
	}

	throw new TypeError(`${sagas} should be an Array or Function`);
};

export const allSagas = () => [
	...runSagas(userAuthSagas),
	...runSagas(productListSagas),
];

export default function* rootSaga() {
	yield all(allSagas());
}
