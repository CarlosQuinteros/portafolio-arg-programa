import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FragmentService {

  private fragment : string = '';
  private fragmentSubject =  new BehaviorSubject<string>(this.fragment);
  private fragments$ = this.fragmentSubject.asObservable();

  constructor() { }

  public setFragment(fragment : string) {
    this.fragment = fragment;
    this.fragmentSubject.next(fragment);
  }

  public getFragment() : Observable<string> {
    return this.fragments$;
  }
}
