export const createSingleton = <T>(defaultVal: T) => {
  let instance: T;

  function createInstance(defaultVal: T) {
    const object = new Object(defaultVal) as T;
    return object;
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance(defaultVal);
      }
      return instance;
    },
  };
};
