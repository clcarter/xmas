import { Injectable } from '@angular/core'
import { Snow } from './models/snow'

@Injectable({
  providedIn: 'root',
})
export class SnowService {
  constructor() {
    console.log('in snow service')
    const snow: Snow = {
      baseSize: [40, 40],
      maxFlakeStems: 6,
      minFlakeStems: 0,
      maxFlakes: 500,
      color: [255, 255, 255],
      zRange: [-50, 30],
      windowHeight: 1080,
      windowWidth: 2400,
    }

    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('./snow.worker', { type: 'module' })
      worker.postMessage(snow)
      worker.addEventListener('message', ({ data }) => {
        console.log(data)
      })
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}
