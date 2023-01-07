import { useEffect, useState } from "react";
import { Store } from "../../store/utils/createStore";

export const useStore = <T>(store: Store<T>) => {
  const [data, setData] = useState<T>(store.props);

  useEffect(() => {
    store.getSubject().subscribe((v) => {
      setData(v);
    });
  }, []);

  return { data, update: store.next.bind(store) };
};
