import days from "../../shared/assets/data/days.json";
import { IDatesItem } from "../types";

function getDays() {
  const FTarget: IDatesItem[] = [];
  const FOee: IDatesItem[] = [];
  const TTarget: IDatesItem[] = [];
  const TOee: IDatesItem[] = [];
  const ATarget: IDatesItem[] = [];
  const AOee: IDatesItem[] = [];
  days.map((element: IDatesItem, index: number) => {
    FTarget.push({ name: index + 1, value: element["F Target"] });
    AOee.push({ name: index + 1, value: element["F OEE,%"] });
    ATarget.push({ name: index + 1, value: element["T Target"] });
    TTarget.push({ name: index + 1, value: element["T OEE,%"] });
    TOee.push({ name: index + 1, value: element["A OEE,%"] });
    FOee.push({ name: index + 1, value: element["A Target"] });
  });
  return {
    FTarget,
    AOee,
    ATarget,
    TTarget,
    TOee,
    FOee,
  };
}
export { getDays };
