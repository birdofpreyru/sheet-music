/* TODO: Everything related to Repetition objects in this module is written by
 * Dr. Pogodin, without a complete understanding how it supposed to work (mind
 * that lot's of existing code rely on repetition objects, but they are never
 * created by the library, thus it is not clear what's up, without knowing
 * the backstory of the project). Thus, for now I just trying to implement
 * generation of repetitions in the straightforward way, trying to make
 * them work on simple repetitions like I likely to have in my scores. */

import {SourceMeasure} from "../../VoiceData/SourceMeasure";
import {Repetition} from "../../MusicSource/Repetition";
import {RepetitionInstruction, RepetitionInstructionEnum, AlignmentType} from "../../VoiceData/Instructions/RepetitionInstruction";
import {RepetitionInstructionComparer} from "../../VoiceData/Instructions/RepetitionInstruction";
import {ArgumentOutOfRangeException} from "../../Exceptions";
import {MusicSheet} from "../../MusicSheet";

export class RepetitionCalculator {
  private musicSheet: MusicSheet;
  private repetitionInstructions: RepetitionInstruction[] = [];
  private currentMeasure: SourceMeasure;
  private currentMeasureIndex: number;

  /**
   * Is called when all repetition symbols have been read from xml.
   * Creates the repetition instructions and adds them to the corresponding measure.
   * Creates the logical repetition objects for iteration and playback.
   * @param musicSheet
   * @param repetitionInstructions
   */
  public calculateRepetitions(musicSheet: MusicSheet, repetitionInstructions: RepetitionInstruction[]): void {
    this.musicSheet = <MusicSheet>musicSheet;
    this.repetitionInstructions = repetitionInstructions;
    const sourceMeasures: SourceMeasure[] = this.musicSheet.SourceMeasures;
    for (let idx: number = 0, len: number = this.repetitionInstructions.length; idx < len; ++idx) {
      const instruction: RepetitionInstruction = this.repetitionInstructions[idx];
      this.currentMeasureIndex = instruction.measureIndex;
      this.currentMeasure = sourceMeasures[this.currentMeasureIndex];
      this.handleRepetitionInstructions(instruction);
    }

    // if there are more than one instruction at measure begin or end,
    // sort them according to the nesting of the repetitions:
    for (let idx: number = 0, len: number = this.musicSheet.SourceMeasures.length; idx < len; ++idx) {
      const measure: SourceMeasure = this.musicSheet.SourceMeasures[idx];
      if (measure.FirstRepetitionInstructions.length > 1) {
        measure.FirstRepetitionInstructions.sort(RepetitionInstructionComparer.Compare);
      }
      if (measure.LastRepetitionInstructions.length > 1) {
        measure.LastRepetitionInstructions.sort(RepetitionInstructionComparer.Compare);
      }
    }
  }

  private handleRepetitionInstructions(currentRepetitionInstruction: RepetitionInstruction): boolean {
    if (!this.currentMeasure) {
      return false;
    }
    switch (currentRepetitionInstruction.type) {
      case RepetitionInstructionEnum.StartLine: {
        /* Inits a new repetition object. */
        const rep: Repetition = new Repetition(this.musicSheet, false);
        rep.startMarker = currentRepetitionInstruction;

        /* TODO: The actual number of repetitions should be somehow deduced
         * from the actual music sheet data. */
        rep.UserNumberOfRepetitions = 2;

        currentRepetitionInstruction.parentRepetition = rep;
        this.musicSheet.Repetitions.push(rep);
        this.currentMeasure.FirstRepetitionInstructions.push(currentRepetitionInstruction);
        break;
      }
      case RepetitionInstructionEnum.BackJumpLine: {
        /* Find corresponding repetition (the last non-closed one). */
        let rep: Repetition;
        for (let i: number = this.musicSheet.Repetitions.length - 1;
            i >= 0; i -= 1) {
          const r: Repetition = this.musicSheet.Repetitions[i];
          if (!r.endMarker) {
            rep = r;
            break;
          }
        }
        if (!rep) {
          throw Error("Repetitions calculation failed");
        }
        rep.BackwardJumpInstructions.push(currentRepetitionInstruction);
        rep.endMarker = currentRepetitionInstruction;

        currentRepetitionInstruction.parentRepetition = rep;
        this.currentMeasure.LastRepetitionInstructions.push(currentRepetitionInstruction);
        break;
      }
      case RepetitionInstructionEnum.Ending:
        // set ending start or end
        if (currentRepetitionInstruction.alignment === AlignmentType.Begin) {  // ending start
          this.currentMeasure.FirstRepetitionInstructions.push(currentRepetitionInstruction);
        } else { // ending end
          for (let idx: number = 0, len: number = currentRepetitionInstruction.endingIndices.length; idx < len; ++idx) {
            this.currentMeasure.LastRepetitionInstructions.push(currentRepetitionInstruction);
          }
        }
        break;
      case RepetitionInstructionEnum.Segno:
        this.currentMeasure.FirstRepetitionInstructions.push(currentRepetitionInstruction);
        break;
      case RepetitionInstructionEnum.Fine:
        this.currentMeasure.LastRepetitionInstructions.push(currentRepetitionInstruction);
        break;
      case RepetitionInstructionEnum.ToCoda:
        this.currentMeasure.LastRepetitionInstructions.push(currentRepetitionInstruction);
        break;
      case RepetitionInstructionEnum.Coda:
        this.currentMeasure.LastRepetitionInstructions.push(currentRepetitionInstruction);
        break;
      case RepetitionInstructionEnum.DaCapo:
        this.currentMeasure.LastRepetitionInstructions.push(currentRepetitionInstruction);
        break;
      case RepetitionInstructionEnum.DalSegno:
        this.currentMeasure.LastRepetitionInstructions.push(currentRepetitionInstruction);
        break;
      case RepetitionInstructionEnum.DalSegnoAlFine:
        this.currentMeasure.LastRepetitionInstructions.push(currentRepetitionInstruction);
        break;
      case RepetitionInstructionEnum.DaCapoAlFine:
        this.currentMeasure.LastRepetitionInstructions.push(currentRepetitionInstruction);
        break;
      case RepetitionInstructionEnum.DalSegnoAlCoda:
        this.currentMeasure.LastRepetitionInstructions.push(currentRepetitionInstruction);
        break;
      case RepetitionInstructionEnum.DaCapoAlCoda:
        this.currentMeasure.LastRepetitionInstructions.push(currentRepetitionInstruction);
        break;
      case RepetitionInstructionEnum.None:
        break;
      default:
        throw new ArgumentOutOfRangeException("currentRepetitionInstruction");
    }
    return true;
  }
}
