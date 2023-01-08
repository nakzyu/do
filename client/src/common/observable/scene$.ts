import { createSingletonSubject } from "./util/createSingletonSubject";

const defaultVals = {
  type: "TITLE",
  nickName: "nickName",
};

const scene$ = createSingletonSubject(defaultVals);

export default scene$;
