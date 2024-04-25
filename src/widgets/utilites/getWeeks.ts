import weeks from "../../shared/assets/data/weeks.json";

function getWeeks() {
  const FTarget = [];
  const FOee = [];
  const TTarget = [];
  const TOee = [];
  const ATarget = [];
  const AOee = [];
  weeks.map((element, index) => {
    FTarget.push({week: index + 1, value: element["F Target"]});
    FOee.push({week: index + 1, value: element["F OEE,%"]});
    TTarget.push({week: index + 1, value: element["T Target"]});
    TOee.push({week: index + 1, value: element["T OEE,%"]});
    ATarget.push({week: index + 1, value: element["A Target"]});
    AOee.push({week: index + 1, value: element["A OEE,%"]});
  });
  return {FTarget, AOee, ATarget, TTarget, TOee, FOee}
}
export {getWeeks}
