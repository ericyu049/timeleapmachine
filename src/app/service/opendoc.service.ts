import { BehaviorSubject, Observable } from "rxjs";

export const openDoc: BehaviorSubject<boolean> = new BehaviorSubject(false);
export const openDoc$obs: Observable<boolean> = openDoc.asObservable();
