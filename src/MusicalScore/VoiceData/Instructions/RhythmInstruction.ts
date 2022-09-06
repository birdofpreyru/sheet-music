import {AbstractNotationInstruction} from "./AbstractNotationInstruction";
import {Fraction} from "../../../Common/DataObjects/Fraction";

/**
 * A [[RhythmInstruction]] is the time signature which specifies the number of beats in each bar, and the value of one beat.
 */
export class RhythmInstruction extends AbstractNotationInstruction {
    constructor(rhythm: Fraction, rhythmSymbolEnum: RhythmSymbolEnum) {
        super(undefined); // FIXME no parent SourceStaffEntry
        this.rhythm = rhythm;
        this.numerator = rhythm.Numerator;
        this.denominator = rhythm.Denominator;
        this.symbolEnum = rhythmSymbolEnum;
    }

    private numerator: number;
    private denominator: number;
    private rhythm: Fraction;
    private symbolEnum: RhythmSymbolEnum;

    public get Rhythm(): Fraction {
        return this.rhythm;
    }

    public set Rhythm(value: Fraction) {
        this.rhythm = value;
    }

    public get SymbolEnum(): RhythmSymbolEnum {
        return this.symbolEnum;
    }

    public set SymbolEnum(value: RhythmSymbolEnum) {
        this.symbolEnum = value;
    }

    public clone(): RhythmInstruction {
        return new RhythmInstruction(this.rhythm.clone(), this.symbolEnum);
    }

    public OperatorEquals(rhythm2: RhythmInstruction): boolean {
      return rhythm2
        && this.numerator === rhythm2.numerator
        && this.denominator === rhythm2.denominator;
    }

    public OperatorNotEqual(rhythm2: RhythmInstruction): boolean {
      return rhythm2 !== this;
    }

    public ToString(): string {
        return "Rhythm: " + this.rhythm.toString();
    }
}

export enum RhythmSymbolEnum {
    NONE = 0,
    COMMON = 1,
    CUT = 2,
}
