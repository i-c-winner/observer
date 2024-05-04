interface IBarHeader {
  person: string;
  title: string;
}
interface IDatesItem {
  [key: string]: string | number;
}
type TElement = "FTarget" | "FOee" | "TTarget" | "TOee" | "ATarget" | "AOee";
export type { IBarHeader, IDatesItem, TElement };
