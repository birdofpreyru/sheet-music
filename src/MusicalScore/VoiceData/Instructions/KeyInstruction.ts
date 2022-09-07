import {AbstractNotationInstruction} from "./AbstractNotationInstruction";
import {SourceStaffEntry} from "../SourceStaffEntry";
import {NoteEnum} from "../../../Common/DataObjects/Pitch";
import {AccidentalEnum} from "../../../Common/DataObjects/Pitch";
import {Pitch} from "../../../Common/DataObjects/Pitch";

/**
 * A [[KeyInstruction]] is a key signature denoting which notes are to be sharpened or flattened.
 */
export class KeyInstruction extends AbstractNotationInstruction {
    constructor(sourceStaffEntry: SourceStaffEntry = undefined, key = 0, mode: KeyEnum = KeyEnum.major) {
        super(sourceStaffEntry);
        this.Key = key;
        this.keyTypeOriginal = key;
        this.mode = mode;
        this.alteratedNotes = this.calcAlteratedNotes();
    }

    private static sharpPositionList: NoteEnum[] = [NoteEnum.F, NoteEnum.C, NoteEnum.G, NoteEnum.D, NoteEnum.A, NoteEnum.E, NoteEnum.B];
    private static flatPositionList: NoteEnum[] = [NoteEnum.B, NoteEnum.E, NoteEnum.A, NoteEnum.D, NoteEnum.G, NoteEnum.C, NoteEnum.F];

    private keyType: number;
    public keyTypeOriginal: number;
    private mode: KeyEnum;
    private alteratedNotes: NoteEnum[];
    /** The halftones this instruction was transposed by, compared to the original. */
    public isTransposedBy = 0;

    public static copy(keyInstruction: KeyInstruction): KeyInstruction {
        const newKeyInstruction: KeyInstruction = new KeyInstruction(keyInstruction.parent, keyInstruction.Key, keyInstruction.Mode);
        // note that newKeyInstruction.keyTypeOriginal is set incorrectly in the constructor, but we fix that here:
        newKeyInstruction.keyTypeOriginal = keyInstruction.keyTypeOriginal;
        return newKeyInstruction;
    }

    public static getAllPossibleMajorKeyInstructions(): KeyInstruction[] {
        const keyInstructionList: KeyInstruction[] = [];
        for (let keyType = -7; keyType < 7; keyType++) {
            const currentKeyInstruction: KeyInstruction = new KeyInstruction(undefined, keyType, KeyEnum.major);
            keyInstructionList.push(currentKeyInstruction);
        }
        return keyInstructionList;
    }

    public get Key(): number {
        return this.keyType;
    }

    public set Key(value: number) {
        this.keyType = value;
        this.alteratedNotes = this.calcAlteratedNotes();
    }

    public get Mode(): KeyEnum {
        return this.mode;
    }

    public set Mode(value: KeyEnum) {
        this.mode = value;
    }

    public get AlteratedNotes(): NoteEnum[] {
        return this.alteratedNotes;
    }

    private calcAlteratedNotes(): NoteEnum[] {
        const noteList: NoteEnum[] = [];
        if (this.keyType > 0) {
            for (let i = 0; i < this.keyType; i++) {
                noteList.push(KeyInstruction.sharpPositionList[i]);
            }
        } else if (this.keyType < 0) {
            for (let i = 0; i < -this.keyType; i++) {
                noteList.push(KeyInstruction.flatPositionList[i]);
            }
        }
        return noteList;
    }

    public willAlterateNote(note: NoteEnum): boolean {
        if (this.alteratedNotes.indexOf(note) >= 0) {
            return true;
        }
        return false;
    }

    public getAlterationForPitch(pitch: Pitch): AccidentalEnum {
        if (this.keyType > 0 && this.alteratedNotes.indexOf(pitch.FundamentalNote) <= this.keyType) {
        // if (this.keyType > 0 && this.alteratedNotes.indexOf(pitch.FundamentalNote) > -1) {
            return AccidentalEnum.SHARP;
        // } else if (this.keyType < 0 && this.alteratedNotes.indexOf(pitch.FundamentalNote) > -1) {
        } else if (this.keyType < 0 && this.alteratedNotes.indexOf(pitch.FundamentalNote) <= Math.abs(this.keyType)) {
            return AccidentalEnum.FLAT;
        }
        return AccidentalEnum.NONE;
    }

    public ToString(): string {
        return "Key: " + this.keyType + "" + this.mode;
    }

    public OperatorEquals(key: KeyInstruction): boolean {
      return key && this.Key === key.Key && this.Mode === key.Mode;
    }

    public OperatorNotEqual(key2: KeyInstruction): boolean {
        return !(this.OperatorEquals(key2));
    }
}

export class NoteEnumToHalfToneLink {
    constructor(note: NoteEnum, halftone: number) {
        this.note = note;
        this.halfTone = halftone;
    }

    public note: NoteEnum;
    public halfTone: number;
}

export enum KeyEnum {
    major = 0,
    minor = 1,
    none = 2,
    dorian = 3,
    phrygian = 4,
    lydian = 5,
    mixolydian = 6,
    aeolian = 7,
    ionian = 8,
    locrian = 9,
}
