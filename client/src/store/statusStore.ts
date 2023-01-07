import { createStore } from "./utils/createStore";

const statusStoreProps = {
  id: "id",
  nickName: "nickName",
};

export type StatusStore = typeof statusStoreProps;

const statusStore = createStore(statusStoreProps);

export default statusStore;
