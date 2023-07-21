import {Font} from "../../../Common/DataObjects/Font";
import {LyricWord} from "./LyricsWord";
import {VoiceEntry} from "../VoiceEntry";

let lastId: number = 0;

export class LyricsEntry {
    constructor(
      text: string,
      verseNumber: string,
      word: LyricWord,
      parent: VoiceEntry,
      syllableNumber: number = -1,
      font: Font = undefined
    ) {
        this.text = text;
        this.word = word;
        this.parent = parent;

        // Note: For our purposes here, we don't really need true UUIDs,
        // simple consequtive IDs will do just fine, and don't require extra
        // dependencies.
        if (++lastId === Number.MAX_SAFE_INTEGER) { lastId = 1; }
        this.uuid = `lyrics-entry-${lastId}`;

        this.verseNumber = verseNumber;
        if (syllableNumber >= 0) {
            this.syllableIndex = syllableNumber;
        }

        // OSMD@1.7.1 added .FontStyle prop to LyricsEntry, which returns
        // "italic" or "regular" font based on whether the entry is chorus or
        // translation, or neither. With our custom and better font handling,
        // we removed that new prop, and instead we calculate the font style
        // here, following the same logic, and we apply it modifying the font.
        // NOTE: This relies on .verseNumber field value set.
        const italic: boolean = this.IsChorus || this.IsTranslation;
        this.font = font;
        if (this.font.Italic !== italic) {
          this.font = this.font.clone();
          this.font.Italic = italic;
        }
    }
    private color: string;
    private font: Font;
    private text: string;
    private uuid: string;
    private word: LyricWord;
    private parent: VoiceEntry;
    private verseNumber: string;
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

    public get Uuid(): string {
      return this.uuid;
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

    public get VerseNumber(): string {
        return this.verseNumber;
    }

    public get SyllableIndex(): number {
        return this.syllableIndex;
    }

    public get IsTranslation(): boolean {
        return this.VerseNumber.endsWith("translation");
    }

    public get IsChorus(): boolean {
        return this.VerseNumber.startsWith("chorus");
    }
}
