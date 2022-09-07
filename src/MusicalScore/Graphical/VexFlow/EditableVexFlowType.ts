// Pre-existing code does in multiple places operations on Vex.Flow namespace
// which are forbidden by TypeScript types for vexflow. In the pre-existing code
// it was done by assuming the namespace has "any" type. This is a cleaner
// approach: it extends / modifies the namespace typing and used where needed.

import Vex from 'vexflow';

export type EditableVF = typeof Vex.Flow & {
  DEFAULT_FONT_STACK: object[];
  DEFAULT_NOTATION_FONT_SCALE: number;
  DEFAULT_TAB_FONT_SCALE: number;
  STAVE_LINE_THICKNESS: number;
  STEM_WIDTH: number;

  Fonts?: { [key: string]: object};
};
