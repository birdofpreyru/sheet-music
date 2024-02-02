import { Font } from "../../Common/DataObjects/Font";

export interface ITextMeasurer {
    fontSizeStandard: number;
    computeTextWidthToHeightRatio(text: string, font: Font): number;
    // computeTextWidth(text: string, font: Font): number;
}
