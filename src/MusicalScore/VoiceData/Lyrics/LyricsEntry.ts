import {Font} from "../../../Common/DataObjects/Font";
import {LyricWord} from "./LyricsWord";
import {VoiceEntry} from "../VoiceEntry";

export class LyricsEntry {
    constructor(
      text: string, verseNumber: number, word: LyricWord, parent: VoiceEntry, syllableNumber: number = -1, font: Font = undefined) {
        this.font = font;
        this.text = text;
        this.word = word;
        this.parent = parent;
        this.verseNumber = verseNumber;
        if (syllableNumber >= 0) {
            this.syllableIndex = syllableNumber;
        }
    }
    private color: string;
    private font: Font;
    private text: string;
    private word: LyricWord;
    private parent: VoiceEntry;
    private verseNumber: number;
    private syllableIndex: number;
    public extend: boolean;

    public get Color(): string { return this.color; }
    public set Color(value: string) { this.color = value; }

    public get Font(): Font {
        return this.font;
    }
    public get Text(): string {
        return this.text;
    }
    public set Text(value: string) {
        this.text = value;
    }
    public get Word(): LyricWord {
        return this.word;
    }
    public get Parent(): VoiceEntry {
        return this.parent;
    }
    public set Parent(value: VoiceEntry) {
        this.parent = value;
    }

    public get VerseNumber(): number {
        return this.verseNumber;
    }

    public get SyllableIndex(): number {
        return this.syllableIndex;
    }
}
