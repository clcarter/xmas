import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'

export type Carters =
  | 'Nate & Amanda'
  | 'Chris & Eliza'
  | 'Jessica & Jake'
  | 'Chantel & Jake'
  | 'Stacie & Logan'

  export type CarterInitials =
  | 'n-a'
  | 'c-e'
  | 'j-j'
  | 'c-j'
  | 's-l'

export type Wright =
  | 'Alan & Angela'
  | 'Alana & Eric'
  | 'Joe & Aubrey'
  | 'Bryna'
  | 'Charity & Jordan'
  | 'Chris & Eliza'
  | 'Emilie'
  | 'Hyrum & Chelsea'

export type Couples = {
  [key in keyof Carters & keyof Wright]: Carters & Wright
}

export interface Family {
  couples: Couples
  gifters: Couples
  participating: Couples
  previousExchanges: Record<string, unknown>
  randomized: boolean
}

export interface Gifters {
  carter: Family
  wright: Family
}
export interface DisplayGifters {
  from: string
  to: string
  fromInitials: CarterInitials
  leave?: boolean
}

@Injectable({ providedIn: 'root' })
export class GiftService {
  gifters$: Observable<DisplayGifters[]>
  constructor(private http: HttpClient) {
    this.gifters$ = this.getGifters()
  }

  getGifters(): Observable<DisplayGifters[]> {
    return this.http.get<Gifters>('assets/family.json').pipe(
      map(data => this.createArray(data.carter.gifters)),
      shareReplay(1)
    )
  }

  private createArray(gifters: Couples): DisplayGifters[] {
    return Object.keys(gifters).map((from: string) => ({
      from,
      fromInitials: from.split(' ').filter(it => it !== '&').map(it => it.substr(0, 1)).join('-').toLowerCase() as CarterInitials,
      to: gifters[from as any],
    }))
  }
}
