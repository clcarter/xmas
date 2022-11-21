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

export type CouplesKey = keyof Carters & keyof Wright
export type Couples = {
  [key in CouplesKey]: Carters & Wright
}

export interface Family {
  couples: Couples
  gifters: Couples
  participating: Couples
  exchanges: Years
  randomized: boolean
}

export type YearPrefix = 'y'
export type Year = 2013 | 2014 | 2015 | 2016 | 2017 | 2018
                 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024
                 | 2025 | 2026 | 2027 | 2028 | 2029 | 2030
export type YearKey = `${YearPrefix}${Year}`
export type Years = {
  [key in YearKey]: Couples
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
  current = new Date().getFullYear()
  gifters$: Observable<DisplayGifters[]>
  constructor(private http: HttpClient) {
    this.gifters$ = this.getGifters()
  }

  getGifters(year: number = this.current): Observable<DisplayGifters[]> {
    return this.http.get<Gifters>('assets/family.json').pipe(
      map((data: Gifters) => {
        const yearKey = `y${year}` as YearKey
        // return this.createArray(data.carter.gifters)
        return this.createArray(data.carter.exchanges[yearKey])
      }),
      shareReplay(1)
    )
  }

  private createArray(gifters: Couples): DisplayGifters[] {
    return Object.keys(gifters).map((from: string) => ({
      from,
      fromInitials: from.split(' ').filter(it => it !== '&').map(it => it.substring(0, 1)).join('-').toLowerCase() as CarterInitials ?? '',
      to: gifters[from as any],
    }))
  }
}
