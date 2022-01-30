import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class StoreProvider {
  private store: BehaviorSubject<any> = new BehaviorSubject<any>({});
  private store$: Observable<any> = this.store.asObservable();

  public emit(store: any): void {
    //const combined = merge(this.store.value, store);
    //  this.store.next(combined as never);
  }

  public listen(store?: string): Observable<any> {
    return store
      ? this.store$.pipe(
          filter((value) => value && value[store]),
          map((value) => value[store])
        )
      : this.store$.pipe(filter((value) => value));
  }

  public $ = this.store;
}
