import { createSingletonSubject } from "./util/createSingletonSubject";

const defaultVals = {
  id: "id",
  nickName: "nickName",
};

const status$ = createSingletonSubject(defaultVals);

export default status$;
