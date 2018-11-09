import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface Family {
  couples: object
  gifters: object
  participating: object
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
}

@Injectable()
export class GiftService {

  constructor(private http: HttpClient) { }
  getGifters(): Observable<DisplayGifters[]> {
    return this.http.get<Gifters>('/assets/family.json').pipe(map((data: Gifters) => this.createArray(data.carter.gifters)))
  }
  private createArray(gifters): DisplayGifters[] {
    return Object.keys(gifters).map(from => ({from, to: gifters[from]}))
  }
}
