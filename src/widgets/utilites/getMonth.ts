import month from "../../shared/assets/data/monthly.json";
import weeks from "../../shared/assets/data/weeks.json";
import {IDatesItem} from "../types";

function getMonth() {
  const FTarget: IDatesItem[] = [];
  const FOee: IDatesItem[]  = [];
  const TTarget: IDatesItem[]  = [];
  const TOee: IDatesItem[]  = [];
  const ATarget: IDatesItem[]  = [];
  const AOee: IDatesItem[]  = [];
  month.map((element: IDatesItem , index: number) => {
    FTarget.push({week: index + 1, value: element["F Target"]});
    FOee.push({week: index + 1, value: element["F OEE,%"]});
    TTarget.push({week: index + 1, value: element["T Target"]});
    TOee.push({week: index + 1, value: element["T OEE,%"]});
    ATarget.push({week: index + 1, value: element["A Target"]});
    AOee.push({week: index + 1, value: element["A OEE,%"]});
  });
  return {FTarget, AOee, ATarget, TTarget, TOee, FOee};
}

export { getMonth };