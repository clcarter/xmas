/// <reference lib="webworker" />

import { Snow } from 'src/app/models/snow';

interface SnowEvent extends MessageEvent {
  data: Snow
}

const flakes = []

const determineStems = ({maxFlakeStems, minFlakeStems}: Partial<Snow>) => {
  return Math.round(Math.random() * maxFlakeStems)
}

const generateFlake = (config) => {
  return [];
}

addEventListener('message', ({ data }: SnowEvent) => {
  console.log('in worker');
  const response = `worker response to ${data.baseSize}`;
  const flake = generateFlake(data)
  postMessage(response);
});
