import { Injectable } from '@angular/core';
import { Snow } from './models/snow';

@Injectable({
  providedIn: 'root'
})
export class SnowService {

  constructor() {

    const snow: Snow = {
      baseSize: [40, 40],
      maxFlakeStems: 6,
      minFlakeStems: 0,
      maxFlakes: 500,
      color: [ 255, 255, 255],
      zRange: [-50, 30],
      windowHeight: 1080,
      windowWidth: 2400
    }
    const worker = new Worker('src/app/snow.worker.ts', {type: 'module'});

    worker.postMessage(snow);
    worker.addEventListener('message', ({data}) => {
      console.log(data);
    })
  }
}
