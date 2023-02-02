import { BehaviorSubject } from "rxjs";

export class SingletonSubject<T> {
  public instance: BehaviorSubject<T>;

  constructor(props: T) {
    this.instance = new BehaviorSubject<T>(props);
  }

  public nextPartially(props: Partial<T>) {
    const partialValueIntegrated = { ...this.instance.value, ...props };
    this.instance.next(partialValueIntegrated);
  }
}
