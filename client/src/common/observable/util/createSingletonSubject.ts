import { SingletonSubject } from "../../model/SingletonSubject";
import { createSingleton } from "../../util/createSingleton";

export const createSingletonSubject = <T>(store: T) => {
  return createSingleton(new SingletonSubject(store)).getInstance();
};
