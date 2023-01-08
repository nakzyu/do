import { useEffect, useState } from "react";
import { SingletonSubject } from "../../common/observable/util/createSingletonSubject";

export const useSubject = <T>(observable$: SingletonSubject<T>) => {
  const [data, setData] = useState<T>(observable$.instance.value);

  useEffect(() => {
    observable$.instance.subscribe((v) => {
      setData(v);
    });
  }, []);

  return { data, update: observable$.nextPartially.bind(observable$) };
};
