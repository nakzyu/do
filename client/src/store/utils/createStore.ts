import { Subject } from "rxjs";
import { createSingleton } from "../../utils/createSingleton";

export class Store<T> {
  public props: T;
  private subject: Subject<T>;

  constructor(props: T) {
    this.props = props;
    this.subject = new Subject<T>();
  }

  public next(props: Partial<T>) {
    this.props = { ...this.props, ...props };
    this.subject.next(this.props);
  }

  public getSubject() {
    return this.subject;
  }
}

export const createStore = <T>(store: T) => {
  return createSingleton(new Store(store)).getInstance();
};
