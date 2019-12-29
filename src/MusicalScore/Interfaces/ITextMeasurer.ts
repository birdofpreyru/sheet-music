import { Font } from "../../Common/DataObjects/Font";

export interface ITextMeasurer {
  defaultFontSize: number;
  computeTextWidthToHeightRatio(text: string, font: Font): number;
  setDefaultFontSize(value: number): number;
}
