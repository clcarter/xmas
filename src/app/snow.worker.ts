/// <reference lib="webworker" />

import { Snow } from './models/snow'

interface SnowEvent extends MessageEvent {
  data: Snow
}

const flakes = []

const determineStems = ({ maxFlakeStems, minFlakeStems }: Partial<Snow>) =>
  Math.round(Math.random() * (maxFlakeStems ?? 0))

const generateFlake = (_config) => []

addEventListener('message', ({ data }: SnowEvent) => {
  console.log('in worker')
  const response = `worker response to ${data.baseSize}`
  const flake = generateFlake(data)
  postMessage(response)
})
