import ColorPair from "../app/colorPair.js";
import ColorFunctions from "../app/colorFunctions.js";

function test() {
  let pairNumber = 4;
  let testPair1 = ColorFunctions.getColorFromPairNumber(pairNumber);
  console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
  console.assert(testPair1.majorColor == "WHITE");
  console.assert(testPair1.minorColor == "BROWN");

  pairNumber = 5;
  testPair1 = ColorFunctions.getColorFromPairNumber(pairNumber);
  console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
  console.assert(testPair1.majorColor == "WHITE");
  console.assert(testPair1.minorColor == "SLATEGRAY");

  pairNumber = 23;
  testPair1 = ColorFunctions.getColorFromPairNumber(pairNumber);
  console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
  console.assert(testPair1.majorColor == "RED");
  console.assert(testPair1.minorColor == "GREEN");

  let testPair2 = new ColorPair();
  testPair2.majorColor = "YELLOW";
  testPair2.minorColor = "GREEN";
  pairNumber = ColorFunctions.getPairNumberFromColor(testPair2);
  console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
  console.assert(pairNumber == 18);

  testPair2 = new ColorPair();
  testPair2.majorColor = "RED";
  testPair2.minorColor = "BLUE";
  pairNumber = ColorFunctions.getPairNumberFromColor(testPair2);
  console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
  console.assert(pairNumber == 6);

  const colorPairManual = ColorFunctions.getColorReferenceManual();
  for (const colorPairFromManual of colorPairManual) {
    let pairNumber = colorPairFromManual.pairNumber;
    let testColor = ColorFunctions.getColorFromPairNumber(pairNumber);
    console.assert(
      testColor.majorColor === colorPairFromManual.majorColor,
      `Expected major color: ${colorPairFromManual.majorColor}, but got ${testColor.majorColor}`
    );
    console.assert(
      testColor.minorColor === colorPairFromManual.minorColor,
      `Expected minor color: ${colorPairFromManual.minorColor}, but got ${testColor.minorColor}`
    );
    console.log(colorPairFromManual);
  }
}
test();
