import  days  from "../../shared/assets/data/days.json";
import { IDatesItem } from "../types";


function getDays() {
  const FTarget: IDatesItem[] = [];
  const FOee: IDatesItem[]  = [];
  const TTarget: IDatesItem[]  = [];
  const TOee: IDatesItem[]  = [];
  const ATarget: IDatesItem[]  = [];
  const AOee: IDatesItem[]  = [];
  days.map((element: IDatesItem, index: number) => {
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