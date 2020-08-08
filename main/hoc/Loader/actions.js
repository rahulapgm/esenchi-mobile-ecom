import { CLOSE_LOADER, SHOW_LOADER } from "./constants";

export const closeLoader = data => {
  return {
    type: CLOSE_LOADER,
    data
  };
};

export const showLoader = data => {
  return {
    type: SHOW_LOADER,
    data
  };
};
