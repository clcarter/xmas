/// <reference lib="webworker" />

import { Snow, SnowFlake } from './snow'

interface SnowEvent extends MessageEvent {
  data: Snow
}

const determineXSections = ({ maxFlakeXSections = 4, minFlakeXSections = 0 }: Partial<Snow>): number =>
  Math.round(Math.random() * maxFlakeXSections) + 1

const determineSize = ({ baseSize = 30 }: Partial<Snow>): number =>
  Math.round((Math.random() + .5) * (Math.abs(baseSize) + 1))

const determineZAxis = ({ zRange = [0, 50] }: Partial<Snow>): number =>
  Math.round(Math.random() * Math.abs(zRange[1] - zRange[0]))


const generateFlakes = (config: Snow): SnowFlake[] =>
  new Array(config.maxFlakes).fill(0).map(() => ({
    color: config.color,
    size: determineSize(config),
    zAxis: determineZAxis(config),
    xSections: determineXSections(config)
  } as SnowFlake))

addEventListener('message', ({ data }: SnowEvent) => {
  const flakes = generateFlakes(data)
  postMessage(flakes)
})
