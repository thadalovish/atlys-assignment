import { rootReducer } from "store/storeSetup";
export { store, history } from "store/storeSetup";

export type IAppState = ReturnType<typeof rootReducer>;
