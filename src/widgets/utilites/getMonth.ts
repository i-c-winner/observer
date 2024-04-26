import month from "../../shared/assets/data/monthly.json";
import {IDatesItem} from "../types";

function getMonth() {
  const FTarget: IDatesItem[] = [];
  const FOee: IDatesItem[]  = [];
  const TTarget: IDatesItem[]  = [];
  const TOee: IDatesItem[]  = [];
  const ATarget: IDatesItem[]  = [];
  const AOee: IDatesItem[]  = [];
  month.map((element: IDatesItem , index: number) => {
    FTarget.push({name: index + 1, value: element["F Target"]});
    FOee.push({name: index + 1, value: element["F OEE,%"]});
    TTarget.push({name: index + 1, value: element["T Target"]});
    TOee.push({name: index + 1, value: element["T OEE,%"]});
    ATarget.push({name: index + 1, value: element["A Target"]});
    AOee.push({name: index + 1, value: element["A OEE,%"]});
  });
  return {FTarget, AOee, ATarget, TTarget, TOee, FOee};
}

export { getMonth };