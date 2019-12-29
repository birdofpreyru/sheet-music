import { GraphicalInstantaneousDynamicExpression } from "../GraphicalInstantaneousDynamicExpression";
import { Font } from "../../../Common/DataObjects/Font";
import { InstantaneousDynamicExpression, DynamicEnum } from "../../VoiceData/Expressions/InstantaneousDynamicExpression";
import { GraphicalLabel } from "../GraphicalLabel";
import { Label } from "../../Label";
import { TextAlignmentEnum } from "../../../Common/Enums/TextAlignment";
import { StaffLine } from "../StaffLine";
import { GraphicalMeasure } from "../GraphicalMeasure";

export class VexFlowInstantaneousDynamicExpression extends GraphicalInstantaneousDynamicExpression {
    constructor(instantaneousDynamicExpression: InstantaneousDynamicExpression, staffLine: StaffLine, measure: GraphicalMeasure) {
        super(instantaneousDynamicExpression, staffLine, measure);

        this.label = new GraphicalLabel(
          new Label(this.Expression),
          this.rules.ContinuousDynamicTextHeight,
          TextAlignmentEnum.CenterCenter,
          this.PositionAndShape,
        );

        const font: Font = this.label.Label.font;
        font.Italic = true;
        font.Weight = "bold";

        this.label.setLabelPositionAndShapeBorders();
        this.PositionAndShape.calculateBoundingBox();
    }

    get InstantaneousDynamic(): InstantaneousDynamicExpression {
        return this.mInstantaneousDynamicExpression;
    }

    get Expression(): string {
        return DynamicEnum[this.mInstantaneousDynamicExpression.DynEnum];
    }
}
