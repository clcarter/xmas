import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

export type Carters = 'Nate & Amanda' |
  'Chris & Eliza' |
  'Jessica & Jake' |
  'Chantel & Jake' |
  'Stacie & Logan'

export type Wright = 'Alan & Angela' |
  'Alana & Eric' |
  'Joe & Aubrey' |
  'Bryna' |
  'Charity & Jordan' |
  'Chris & Eliza'  |
  'Emilie' |
  'Hyrum & Chelsea'

export type Couples = {
  [key in keyof Carters & keyof Wright]: Carters & Wright;
};

export interface Family {
  couples: Couples,
  gifters: Couples
  participating: Couples
  previousExchanges: object
  randomized: boolean
}

export interface Gifters {
  carter: Family
  wright: Family
}
export interface DisplayGifters {
  from: string
  to: string
  leave?: boolean
}

@Injectable({providedIn: 'root'})
export class GiftService {
  gifters$: Observable<DisplayGifters[]>
  constructor(private http: HttpClient) {
    this.gifters$ = this.getGifters();
  }

  getGifters(): Observable<DisplayGifters[]> {
    return this.http.get<Gifters>(`assets/family.json`).pipe(
      map((data: Gifters) => this.createArray(data.carter.gifters)),
      shareReplay()
      )
  }

  private createArray(gifters: Couples): DisplayGifters[] {
    return Object.keys(gifters).map((from: string) => ({from, to: gifters[from as any]}))
  }
}
