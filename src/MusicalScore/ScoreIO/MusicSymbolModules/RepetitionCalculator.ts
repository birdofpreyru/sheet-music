/* TODO: Everything related to Repetition objects in this module is written by
 * Dr. Pogodin, without a complete understanding how it supposed to work (mind
 * that lot's of existing code rely on repetition objects, but they are never
 * created by the library, thus it is not clear what's up, without knowing
 * the backstory of the project). Thus, for now I just trying to implement
 * generation of repetitions in the straightforward way, trying to make
 * them work on simple repetitions like I likely to have in my scores. */

import {SourceMeasure} from "../../VoiceData/SourceMeasure";
import {Repetition, RepetitionEndingPart} from "../../MusicSource/Repetition";
import {RepetitionInstruction, RepetitionInstructionEnum, AlignmentType} from "../../VoiceData/Instructions/RepetitionInstruction";
import {RepetitionInstructionComparer} from "../../VoiceData/Instructions/RepetitionInstruction";
import {ArgumentOutOfRangeException} from "../../Exceptions";
import {MusicSheet} from "../../MusicSheet";
import { SourceMusicPart } from "../../MusicSource";

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
    // console.log(repetitionInstructions);
    const sourceMeasures: SourceMeasure[] = this.musicSheet.SourceMeasures;
    for (let idx = 0, len: number = this.repetitionInstructions.length; idx < len; ++idx) {
      const instruction: RepetitionInstruction = this.repetitionInstructions[idx];
      this.currentMeasureIndex = instruction.measureIndex;
      this.currentMeasure = sourceMeasures[this.currentMeasureIndex];
      this.handleRepetitionInstructions(instruction);
    }

    // if there are more than one instruction at measure begin or end,
    // sort them according to the nesting of the repetitions:
    for (let idx = 0, len: number = this.musicSheet.SourceMeasures.length; idx < len; ++idx) {
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
          /* TODO: This largerly repeats the block of code in the previous case,
           * thus should be split into a dedicated function / method. */
          rep = new Repetition(this.musicSheet, false);

          /* TODO: In this case, the start repetition instruction does not
           * exist. Creating it automatically should be possible, but
           * cumbersome for me, as I am not much familiar with the relevant
           * code. Thus, attempting to leave it undefined, in case it resolves
           * the current problems I have. */

          /* TODO: The actual number of repetitions should be somehow deduced
           * from the actual music sheet data. */
          rep.UserNumberOfRepetitions = 2;

          this.musicSheet.Repetitions.push(rep);
        }
        rep.BackwardJumpInstructions.push(currentRepetitionInstruction);
        rep.endMarker = currentRepetitionInstruction;

        currentRepetitionInstruction.parentRepetition = rep;
        this.currentMeasure.LastRepetitionInstructions.push(currentRepetitionInstruction);
        break;
      }
      case RepetitionInstructionEnum.Ending: {
        // TODO: For now it picks up just the last created repetition, which
        // is probably not correct in complex music sheets.
        let rep: Repetition = this.musicSheet.Repetitions[
          this.musicSheet.Repetitions.length - 1
        ];

        // If there is no repetitions at all, create a new "virtual" repetition
        // start at the very beginning of the document.
        if (!rep) {
          const startRepetitionInstruction: RepetitionInstruction =
            new RepetitionInstruction(
              0,
              RepetitionInstructionEnum.StartLine,
            );

          // TODO: Should the last argument be "true" for
          // a "Virtual Overall Repetition"? Or does it mean something different
          // from what we need?
          rep = new Repetition(this.musicSheet, false);

          rep.startMarker = startRepetitionInstruction;
          startRepetitionInstruction.parentRepetition = rep;

          // TODO: The actual number of repetitions should be somehow deduced
          // from the actual music sheet.
          rep.UserNumberOfRepetitions = 2;

          this.musicSheet.Repetitions.push(rep);
        }

        currentRepetitionInstruction.parentRepetition = rep;

        // set ending start or end
        /* TODO: Set forwardJumpInstruction of the Repetition! */
        if (currentRepetitionInstruction.alignment === AlignmentType.Begin) {
          /* ending start */
          const part: SourceMusicPart = new SourceMusicPart(
            this.musicSheet,
            currentRepetitionInstruction.measureIndex,
          );
          const ending: RepetitionEndingPart = new RepetitionEndingPart(part);

          /* TODO: Most probably this is valid only in the most simple case
           * with two alternative endings. */
          /*
          if (!rep.EndingParts.length) {
            rep.forwardJumpInstruction = currentRepetitionInstruction;
          }
          */

          rep.EndingParts.push(ending);
          currentRepetitionInstruction.endingIndices.forEach((index) => {
            rep.EndingIndexDict[index] = ending;
          });

          this.currentMeasure.FirstRepetitionInstructions.push(currentRepetitionInstruction);
        } else {
          /* ending end */
          for (let idx = 0, len: number = currentRepetitionInstruction.endingIndices.length; idx < len; ++idx) {
            this.currentMeasure.LastRepetitionInstructions.push(currentRepetitionInstruction);
            const p: RepetitionEndingPart = rep.EndingIndexDict[currentRepetitionInstruction.endingIndices[idx]];

            /* This handles the calse when the next repetition starts right
             * after the previous one, and the previous one has alternative
             * endings. In this case, the last ending of the previous
             * repetition may be contained in the measure already contained
             * in the new repetition. */
            if (!p) {
              rep = this.musicSheet.Repetitions[
                this.musicSheet.Repetitions.length - 2
              ];
            }

            rep.EndingIndexDict[currentRepetitionInstruction.endingIndices[idx]].part.setEndIndex(
              currentRepetitionInstruction.measureIndex,
            );
          }
        }
        break;
      }
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
