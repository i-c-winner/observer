import  days  from "../../shared/assets/data/days.json";


function getDays() {
  const FTarget = [];
  const FOee = [];
  const TTarget = [];
  const TOee = [];
  const ATarget = [];
  const AOee = [];
  days.map((element, index) => {
    FTarget.push({week: index+1, value: element["F Target"]});
    AOee.push({week: index+1, value: element["F OEE,%"]});
    ATarget.push({week: index+1, value: element["T Target"]});
    TTarget.push({week: index+1, value: element["T OEE,%"]});
    TOee.push({week: index+1, value: element["A OEE,%"]});
    FOee.push({week: index+1, value: element["A Target"]});

  });
  return {FTarget, AOee, ATarget, TTarget, TOee, FOee}
}
export { getDays };