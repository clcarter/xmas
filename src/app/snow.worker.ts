/// <reference lib="webworker" />

import { Snow } from 'src/app/models/snow';
interface SnowEvent extends MessageEvent {
  data: Snow
}

addEventListener('message', ({ data }: SnowEvent) => {
  const response = `worker response to ${data.baseSize}`;
  postMessage(response);
});

const generateFlake = () => {

}

// Javascript is single threaded, meaning that every operation happens one after the other. this includes UI updates. Webworkers allows another 'thread' to be opened to do work at the same time the main thread is running. This is called parallelism and the only way to do it in the web.

// Does this explanation make any sense?