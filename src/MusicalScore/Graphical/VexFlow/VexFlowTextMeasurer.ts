import {ITextMeasurer} from "../../Interfaces/ITextMeasurer";
import {VexFlowConverter} from "./VexFlowConverter";
import { Font } from "../../../Common/DataObjects";
import { EngravingRules } from "../EngravingRules";
/**
 * Created by Matthias on 21.06.2016.
 */

export class VexFlowTextMeasurer implements ITextMeasurer {
    constructor(rules: EngravingRules) {
        const canvas: HTMLCanvasElement = document.createElement("canvas");
        this.context = canvas.getContext("2d");
        this.rules = rules;
    }
    // The context of a canvas used internally to compute font sizes
    private context: CanvasRenderingContext2D;
    public fontSizeStandard: number = 20;
    private rules: EngravingRules;

    public computeTextWidthToHeightRatio(
      text: string,
      font: Font,
    ): number {
      let f: Font = font;
      if (f.Size === undefined) {
        f = f.clone();
        f.Size = this.fontSizeStandard;
      }
      this.context.font = VexFlowConverter.font(font, this.rules);
      return this.context.measureText(text).width / EngravingRules.UnitToPx
        / f.Size;
    }

    // public computeTextWidth(text: string, font: Font): number {
    //     this.context.font = VexFlowConverter.font(fontSize, style, font, this.rules, fontFamily);
    //     return this.context.measureText(text).width / 10.0;
    //     // TODO this shifts the title text of sheets to the right for some reason, maybe because of bigger fontSize?
    // }
}
