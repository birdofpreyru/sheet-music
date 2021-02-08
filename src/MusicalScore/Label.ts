import {TextAlignmentEnum} from "../Common/Enums/TextAlignment";
import {OSMDColor} from "../Common/DataObjects/OSMDColor";
import { Font } from "../Common/DataObjects/Font";

/**
 * A text label on the graphical music sheet.
 * It is used e.g. for titles, composer names, instrument names and dynamic instructions.
 */
export class Label {

    constructor(
      text: string = "",
      alignment: TextAlignmentEnum = TextAlignmentEnum.CenterBottom,
      font: Font = new Font(),
      color: string = undefined,
      uuid: string = undefined,
      print: boolean = true,
    ) {
        this.uuid = uuid;
        this.text = text;
        this.print = print;
        this.textAlignment = alignment;
        this.font = font;
        this.colorDefault = color;
    }

    public uuid: string;

    public text: string;
    public print: boolean;
    public color: OSMDColor;
    public colorDefault: string; // TODO this is Vexflow format, convert to OSMDColor. for now convenient for default colors.
    public font: Font;
    public textAlignment: TextAlignmentEnum;
    public IsCreditLabel: boolean = false;

    public ToString(): string {
        return this.text;
    }
}
