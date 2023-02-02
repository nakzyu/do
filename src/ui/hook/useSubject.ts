import { useEffect, useState } from "react";
import { SingletonSubject } from "../../common/model/SingletonSubject";

export const useSubject = <T>(observable$: SingletonSubject<T>) => {
  const [data, setData] = useState<T>(observable$.instance.value);

  useEffect(() => {
    const { unsubscribe } = observable$.instance.subscribe((v) => {
      setData(v);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { data, update: observable$.nextPartially.bind(observable$) };
};
