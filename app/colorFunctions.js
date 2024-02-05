import ColorPair from "./colorPair.js";

import ColorNames from "./colorNames.js";

function getColorFromPairNumber(pairNumber) {
  let minorSize = ColorNames.MajorColorNames.length;
  let majorSize = ColorNames.MinorColorNames.length;

  if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
    throw `Argument PairNumber:${pairNumber} is outside the allowed range`;
  }
  let zeroBasedPairNumber = pairNumber - 1;
  let majorIndex = parseInt(zeroBasedPairNumber / minorSize);
  let minorIndex = parseInt(zeroBasedPairNumber % minorSize);
  let pair = new ColorPair();
  pair.majorColor = ColorNames.MajorColorNames[majorIndex];
  pair.minorColor = ColorNames.MinorColorNames[minorIndex];
  return pair;
}

function getPairNumberFromColor(pair) {
  let majorIndex = -1;
  for (let i = 0; i < ColorNames.MajorColorNames.length; i++) {
    if (ColorNames.MajorColorNames[i] == pair.majorColor) {
      majorIndex = i;
      break;
    }
  }

  let minorIndex = -1;
  for (let i = 0; i < ColorNames.MinorColorNames.length; i++) {
    if (ColorNames.MinorColorNames[i] == pair.minorColor) {
      minorIndex = i;
      break;
    }
  }

  if (majorIndex == -1 || minorIndex == -1) {
    throw `Unknown Colors:${pair.toString()}`;
  }

  return majorIndex * ColorNames.MinorColorNames.length + (minorIndex + 1);
}

export default { getColorFromPairNumber, getPairNumberFromColor };
