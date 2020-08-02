import { all } from "redux-saga/effects";
import isFunction from "lodash/fp/isFunction";

import userAuthSagas from "../../main/containers/Pages/UserAuth/sagas";
import cartSagas from '../../main/containers/Pages/Cart/sagas';
import orderItemSagas from '../../main/containers/Pages/Cart/OrderItem/sagas';
import categoryDrawerSagas from '../../main/containers/CategoryDrawer/sagas';
import productListingSagas from '../../main/containers/ProductListing/sagas';
import productSagas from '../../main/containers/ProductListing/Product/sagas';
import productSearchSagas from '../../main/containers/ProductSearch/ProductSearchV2/sagas';
import userAddressSagas from '../../main/containers/Pages/ChangeAddress/sagas';

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
	...runSagas(cartSagas),
	...runSagas(orderItemSagas),
	...runSagas(categoryDrawerSagas),
	...runSagas(productListingSagas),
	...runSagas(productSagas),
	...runSagas(productSearchSagas),
	...runSagas(userAddressSagas)
];

export default function* rootSaga() {
	yield all(allSagas());
}
