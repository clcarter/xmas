import { Injectable } from '@angular/core';
import { fromEvent, map, Observable, shareReplay } from 'rxjs';

import type { Snow } from './workers/snow'

@Injectable({
  providedIn: 'root',
})
export class SnowService {
  flakes$!: Observable<Snow>
  constructor() {}

  init(config: Snow) {
    console.log('Snow Service')

    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./workers/snow.worker', import.meta.url), { type: 'module' })
      worker.postMessage(config)
      this.flakes$ = fromEvent<MessageEvent>(worker, 'message').pipe(map(({data}) => data), shareReplay(1))
    }
  }
}
