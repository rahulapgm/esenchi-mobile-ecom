import { all } from "redux-saga/effects";
import isFunction from "lodash/fp/isFunction";

import userAuthSagas from "../../main/containers/Pages/UserAuth/sagas";
import productListSagas from "../../main/containers/PLP/sagas";
import cartSagas from '../../main/containers/Pages/Cart/sagas';
import orderItemSagas from '../../main/containers/Pages/Cart/OrderItem/sagas';
import categoryDrawerSagas from '../../main/containers/CategoryDrawer/sagas';
import productListingSagas from '../../main/containers/ProductListing/sagas';

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
	...runSagas(cartSagas),
	...runSagas(orderItemSagas),
	...runSagas(categoryDrawerSagas),
	...runSagas(productListingSagas)
];

export default function* rootSaga() {
	yield all(allSagas());
}
