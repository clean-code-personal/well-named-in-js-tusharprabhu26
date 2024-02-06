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
  console.assert(colorPairManual[0] === "\n|" + " ".repeat(6) + "Color Coding Reference Manual" + " ".repeat(6) + "|\n" + "-".repeat(43) + "\n| Pair Number | Major Color | Minor Color |\n" + "-".repeat(43), "Expected heading not found in the reference manual");
  for (let i = 1; i < colorPairManual.length; i++) {
    let row = colorPairManual[i];
    let columns = row.split("|");
    let pairNumber = parseInt(columns[1].trim());
    let majorColor = columns[2].trim();
    let minorColor = columns[3].trim();
    let testColor = ColorFunctions.getColorFromPairNumber(pairNumber);
    console.assert(testColor.majorColor === majorColor, `Expected major color: ${testColor.majorColor}, but got ${majorColor}`);
    console.assert(testColor.minorColor === minorColor, `Expected minor color: ${testColor.minorColor}, but got ${minorColor}`);
  }
  console.log(colorPairManual.join("\n"));
}

test();
