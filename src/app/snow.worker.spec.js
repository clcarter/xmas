

const determineStems = ({maxFlakeStems, minFlakeStems}) => {
  return Math.round(Math.random() * maxFlakeStems - minFlakeStems)
}

const results = Array(100).fill({maxFlakeStems: 8, minFlakeStems: 4}).map(it => determineStems(it));
console.log(results.filter(it => it === 0).length);
console.log(results.filter(it => it === 1).length);
console.log(results.filter(it => it === 2).length);
console.log(results.filter(it => it === 3).length);
console.log(results.filter(it => it === 4).length);
console.log(results.filter(it => it === 5).length);
console.log(results.filter(it => it === 6).length);
console.log(results.filter(it => it === 7).length);
console.log(results.filter(it => it === 8).length);
console.log(results.filter(it => it === 9).length);
