import {Voice} from "./Voice";
import {Instrument} from "../Instrument";
import { Tie } from "./Tie";

export class Staff {

    constructor(parentInstrument: Instrument, instrumentStaffId: number) {
        this.parentInstrument = parentInstrument;
        this.id = instrumentStaffId;
        this.audible = true;
        this.following = true;
    }

    public idInMusicSheet: number;
    public audible: boolean;
    public following: boolean;
    public isTab = false;

    private parentInstrument: Instrument;
    private voices: Voice[] = [];
    private volume = 1;
    private id: number;
    private stafflineCount = 5;
    public hasLyrics = false;
    public openTieDict: { [_: number]: Tie } = {};

    public get ParentInstrument(): Instrument {
        return this.parentInstrument;
    }
    public set ParentInstrument(value: Instrument) {
        this.parentInstrument = value;
    }
    public get Voices(): Voice[] {
        return this.voices;
    }
    public get Id(): number {
        return this.id;
    }
    public get Volume(): number {
        return this.volume;
    }
    public set Volume(value: number) {
        this.volume = value;
    }
    public get StafflineCount(): number {
        return this.stafflineCount;
    }
    public set StafflineCount(value: number) {
        this.stafflineCount = value;
    }
}
