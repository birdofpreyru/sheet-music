This file contains the upstream changelog of the OpenSheetMusicDisplay library. \
The changelog of this customized fork is inside the GitHub releases page: \
https://github.com/birdofpreyru/sheet-music/releases

## [1.5.2](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/1.5.1...1.5.2) (2022-08-29)


### Bug Fixes

* **binarySearch:** Fix rare infinite loop in CollectionUtil.binarySearch ([#1201](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1201), merge [#1202](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1202)) ([552b23f](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/552b23f53034dfd606b9fa24075182213ef36d90))


### Features

* **Accents:** Support soft-accent as crescendo+decrescendo wedge on one note/entry ([#1214](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1214), merge [#1215](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1215)) ([db340ac](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/db340acb44a9f70f13791e9ddc8f34f650bcf18c))
* **Tuplets:** Add EngravingRules.TupletNumberLimitConsecutiveRepetitions (default true) etc. (breaking change) [#1207](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1207), merge [#1208](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1208) ([0744bcd](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/0744bcdd4e983767f13911cebaade4b3db6bb405))



## [1.5.1](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/1.5.0...1.5.1) (2022-07-18)


### Bug Fixes

* **generateImages:** Fix rehearsal marks not having a box around them due to node canvas restriction. ([48799ba](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/48799baf9f12ef6214caa33b6528a47ca1ca4227))
* **Layout:** Fix 12/8 rhythm with rest measures overflowing notes, other rest measure issues ([#1187](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1187), merge [#1188](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1188)) ([b524d77](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/b524d77e63fd81b398463db4ab20e50f1de134e8))
* **Rehearsal Mark:** Position correctly when EngravingRules.RehearsalMarkFontSize is increased ([#1176](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1176)) ([d32bc1a](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/d32bc1a437e700be32b61b40cb45807161908620))



# [1.5.0](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/1.4.5...1.5.0) (2022-04-22)


### Bug Fixes

* **Cursor:** Fix undefined errors when drawFromMeasureNumber changed after cursor was shown ([5a13bfb](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/5a13bfbdceb56415c808e537992eac8d1c8e4f91))
* **Tabs:** AutoBeamNotes no longer beams tab notes by default. Add EngravingRule AutoBeamTabs ([c5fa3eb](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/c5fa3eb85a712d33463b3c530630890be62bb704))
* **Ties:** Fix note.NoteTie undefined for tie end note in different voice than start note ([8f9c373](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/8f9c373dcfe2fb7298b4f26f59817d45789cadf5))


### Features

* **ChordSymbols:** Can replace accidentals via e.g. osmd.rules.ChordAccidentalTexts.setValue(1, "♭") (PR [#1154](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1154)) ([ced5cb4](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/ced5cb45dfcdf2a4ac6f8a542902454c47b52a7a))
* **Performance:** **30-60% performance boost**: Compute SkyBottomLines with WebGL and in batches depending on browser and number of measures ([#1158](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1158)) ([66ab7ce](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/66ab7ce18941d8a17b22e43faa527452cf469021))
* **Performance:** Add EngravingRules SkyBottomLineWebGLMinMeasures and AlwaysSetPreferredSkyBottomLineBackendAutomatically ([#1158](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1158)) ([e1c8826](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/e1c8826a7d140b22b6d4548f087405d94f97da66))
* **Performance:** Prefer Plain over WebGL in Firefox (and Safari) for performance ([#1158](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1158)) ([1ac2bd5](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/1ac2bd5606e7a0b1ba50322fa7a1ef00030db5ce))
* **Performance:** Add EngravingRules.DisableWebGLInFirefox and DisableWebGLInSafariAndIOS for options ([#1158](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1158)) ([c48f66d](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/c48f66d3d97afe9461b324c0e178301617271e51))
* **SVG:** Create SVG group with class for beamed note stems, put beam SVG into <g> node ([67f6ac3](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/67f6ac3de236b7f187372017ccad7e2e23417c5d))
* **TimeSignatures:** Can disable time signature for GraphicalMeasure ([#1150](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1150)) with measure.ShowTimeSignature = false ([411a35c](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/411a35c5c94961eb58a2e3d4c09ecd5d3b5327b1))



## [1.4.5](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/1.4.4...1.4.5) (2022-01-28)


### Bug Fixes

* **Wedges:** Simultaneous wedges possible, start/stop corrected ([#1131](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1131)), respect xml number attribute ([44a0dce](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/44a0dce896a3288beb64a50fc3e1136fc35b5d28)), closes [#1134](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1134)
* **OctaveShift:** Fix octave-shift not rendered when type attribute (e.g. "down") not given (even though required) ([44a0dce](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/44a0dce896a3288beb64a50fc3e1136fc35b5d28))


### Features

* **Options/Clefs:** Add osmd.EngravingRules.RenderClefsAtBeginningOfStaffline ([#1135](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1135)) ([03cb762](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/03cb76222ae0591d994fdffc62a918313733479d))



## [1.4.4](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/1.4.3...1.4.4) (2022-01-27)


### Bug Fixes

* **Release:** Fix types pointing at wrong (sub-)folder. Could solve type/import problems. ([2a18295](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/2a182956950f49dd973a814bcf69bd70c826365b))


### Features

* **Options:** Able to set osmd.EngravingRules.SheetMaximumWidth > 32767 for SVG / renderSingleHorizontalStaffline ([6ef37db](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/6ef37db5a9a4bc149204b36fd3ee4978e9083c45))



## [1.4.3](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/1.4.2...1.4.3) (2022-01-18)


### Bug Fixes

* **Ties:** Fix ties not containing all notes, created multiple times ([#1126](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1126)) ([a8fe5ae](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/a8fe5aee16e51b338186450cb7986313ba32a93c)), closes [#1097](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1097)


### Features

* **SVG:** Add group and class to SVG DOM for Clef ([7c218e2](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/7c218e2ece7b80355ac56ce6da000cbbd46d3f63)), KeySignature ([#1128](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1128)) ([1f7e710](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/1f7e7107717e7ee54f808d768b9b4505400126e9)), TimeSignature ([#1129](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1129)) ([6a95483](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/6a9548312066bb260c925e5de6c780f7c966ff6e)), GraphicalTie
* **Ties:** GraphicalTie.SVGElement() gets SVG node ([#1127](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1127)) ([84406d6](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/84406d6e5b15f30ab4355d3a7bbe5c4960857947))



## [1.4.2](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/1.4.1...1.4.2) (2022-01-17)

### Bug Fixes

* **Release:** Fix typings location for npm release ([8171984](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/81719844e99adae112dd21f480670bda73042aa4))

## [1.4.1](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/1.4.0...1.4.1) (2022-01-17)


### Bug Fixes

* **Credit Error:** Fix NaN error when <credit> element has justify attribute ([dec2f1f](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/dec2f1f45cc82dcdc69c59a2ed098e92bd3a1f58))
* **Release:** Fix typings not included in release (1.4.0) ([5829be3](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/5829be32d2601b2ca08e51e68d98ee1df7bc1630))

### Features

* **Color:** Able to set the option {defaultColorMusic: string} ([#1125](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1125)) to apply a color to the whole sheet ([2b3ea16](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/2b3ea16e50d6b993c92224f7f6400d9fe33441a1))
* **Cursor:** Visible with PageBackgroundColor set (SVG) ([#1125](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1125)), transparency dependent on PageBackgroundColor ([a10f779](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/a10f779690d6f652b108d34e130674a144134cbf))
* **Options:** Add darkMode option ([#1125](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1125)) ([d5a2d70](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/d5a2d708beea47e8713b76b419c282ad4a94ee59))



# [1.4.0](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/1.3.1...1.4.0) (2022-01-14)


### Bug Fixes

* **Beam SVG:** VexFlowGraphicalNote.getBeamSVGs() gets SVGs of all beams starting on the note ([#1108](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1108)) ([f4675fd](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/f4675fd7288a78ba6cca112ae619a7fd97364d8d))
* **Clefs**: Fix specific end of measure clef missing ([#1120](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1120))
* **Cursor:** Fix follow for multiple cursors, can set cursor.cursorOptions.follow for each ([#1111](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1111)) ([37f9002](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/37f9002c5e90a351447854cc926f53ab16107edc))
* **Grace Notes:** Don't draw multiple grace note slashes for a set of grace notes ([#1107](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1107)) ([89394db](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/89394dbf6ca885abdf0d96627ecc66b7a5fed37b))
* **GroupBrackets:** Don't draw if only one instrument visible ([b72ef4e](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/b72ef4e04f77c0cd9dc2d6a70f9166bed39630d5))
* **Note overlaps**: Fix notes overlapping / not staggering sometimes ([#1098](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1098)) (05c1ca7)
* **Cross Stave Notes:** Fix ghost notes only created for first few notes in measure, fixing cross stave positioning ([#1062](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1062)) ([0507917](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/05079175993c3a86b35ec15c1fcabe08caa0e4f1))
* **Rehearsal Marks:** Fix undefined error with multi-measure rests and rehearsal marks ([76d5252](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/76d52522bdcde7023f92497396e054af5dd91951))
* **Ties**: Fix ties missing/doubled, orientations ([#1097](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1097))


### Features

* **ChordSymbols:** Add EngravingRules.DefaultColorChordSymbol ([#1106](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1106)) ([7f00a9b](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/7f00a9b29eee4df85741bdc4554d7064b4f8fe25))
* **Note:** Store TransposedPitch (for API access) ([72633da](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/72633da238a18c0f41c1a82e24fba26955ba16cf))
* **Options:** Add EngravingRules.StaggerSameWholeNotes option to x-shift whole notes on same line ([#1098](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1098)) ([dc04dc5](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/dc04dc509eb480ee4b9c4f22f62f63d9942ca18d))
* **Slurs:** GraphicalSlurs save their SVGElement (but not GraphicalTies) ([5686daa](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/5686daa7a78ad0dd4058131297e14f0e45988a86))
* **SVG:** Stems and beams have an id in the DOM ([#1108](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1108)) ([a9b2c10](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/a9b2c1024ca7f7500f3522a0e622dfbfcb71b1f9))
* **Transposing:** Able to transpose single instrument ([#1115](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1115)) independently of other instruments ([e997df9](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/e997df9464a78c146a7dc20d39be706bb4814e32))
* **VexFlowGraphicalNote:** Add getStemSVG() and getBeamSVGs() helper methods ([#1108](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1108)) ([79b28c8](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/79b28c84bb4f6a6f6801db15acc8986ac23ee13a)) ([f4675fd](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/f4675fd7288a78ba6cca112ae619a7fd97364d8d))



## [1.3.1](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/1.3.0...1.3.1) (2021-11-26)


### Bug Fixes

* **Clefs:** Fix in-staff clefs missing or misplaced (2nd voice or with backup/forward tags) ([#1102](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1102)) ([acdf8b0](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/acdf8b0b4b63eac0aa1bde4772751a80b9bd62af)), closes [#1103](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1103)
* **Metronome:** Fix some measures with very long metronome numbers not rendering ([70e1654](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/70e1654f16322507c965bc4125a91b502403eeff))
* **OctaveShift:** Fix incorrect display octave for first of two octave shifts in measure ([#1099](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1099)) ([c090c71](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/c090c710ee4d9441a030b5766b5eb9e78b7a2262))


### Features

* **GraphicalStaffEntry:** Add helper functions getHighestYAtEntry, getSkylineMin, same for bottomline, getAbsoluteStartAndEnd ([2b364a8](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/2b364a8ce47388f2092a09af04d91d2bf3ee9cae)). For usage see [Wiki | Exploring the Demo](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/wiki/Exploring-the-Demo#drawing-overlay-lines-over-the-score-and-getting-a-notes-position)



# [1.3.0](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/1.2.0...1.3.0) (2021-11-13)


### Bug Fixes

* **Accidentals:** Render Slash-flat correctly ([#1074](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1074)) ([2394de7](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/2394de7368b6d5774778fac4c57b97cc20b4cc1d))
* **Fingerings:** Fix Fingerings collisions above/below notes ([#1081](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1081)), improve performance, implement as Labels with correct bboxes ([df9b441](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/df9b4414ca51ea2d406a1307f3603c8be5fde646)), closes [#1086](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1086)
* **Infinite Loop:** Fix rare infinite loop with certain rhythms ([#1073](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1073)) ([a09f702](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/a09f7028f564092b1cfedd9e216345302a817fa4))
* **Multiple Rest Measures:** Display clef at end of multirest measure and fix wrong clef in following measures ([#1064](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1064)) ([53a57fe](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/53a57fe4a2eb17512325228c91a895d1b7126417))
* **MusicSystemBuilder:** Prevent index error when MinMeasureToDrawIndex > 0 ([#1069](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1069)) ([293cfb4](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/293cfb4c336d9fae2117fbcb20d6be17e48abe2e))
* **OctaveShift:** Fix ExtraGraphicalMeasure used as last measure, no endnote ([#1080](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1080)) ([08640e7](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/08640e729c68488d3bb86a74a7b7271e6d7ee49f))
* **Rests:** Fix rest collisions with notes (y coordinate) ([#621](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/621), [#1076](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1076)). Add EngravingRules.RestCollisionYPadding ([32b649a](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/32b649adc8a95aff16130addc1987c57b160dda6))
* **Slash-Flat Accidentals:** Fix quarter flats shown after slash-flat accidentals ([#1075](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1075)) ([87b681f](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/87b681f79ac2838be1f79ef406b31553664c3f2d))
* **Slurs:** Fix slur starting on tie end note not shown ([#1092](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1092)) ([265fa73](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/265fa7362bee7ff61ba8d8fc63d177dd7d7cd817))
* **Tuplets:** Fix dots not corresponding to XML ([#1082](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1082)) ([3899031](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/3899031b4489c0a2ed88d8eee1289ce3439970ce))


### Features

* **Accidentals:** Support remaining microtonal accidentals available in MusicXML and Vexflow ([#1084](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1084)) ([9ccc215](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/9ccc2152dac3f3f9f59a23ade0a55b47d430fab3))
* **ChordSymbols:** Fix collision with notes, add staffline/measure alignment options ([#1087](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1087), [#934](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/934)) ([d814986](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/d81498663a6aedf5004ba132d2bc9c341fbaf436))
* **Cursor:** Add GNotesUnderCursor() function, returning GraphicalNotes ([8c0e2d1](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/8c0e2d16dcbb297c0d1a747fc5cfed3e311a9f5c))
* **Labels:** Always save SVG Node as a reference for GraphicalLabel, allowing SVG manipulation without re-render ([f888939](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/f88893971d6bd321388741fe588bb285b1d3688d)), closes [#711](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/711)



# [1.2.0](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/1.1.0...1.2.0) (2021-09-23)


### Bug Fixes

* **Note X-Positions:** Fix Cross Stave Note Position X-Shift and Ghost Notes for complex fractions ([#1063](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1063)) ([a04fd58](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/a04fd58767107beb57e6ea6974f8e6e480aa02cd)), closes [#1062](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1062)
* **Repeats:** Fix Repeat end+start (:||:) collision ([#1061](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1061)) by adding padding ([88d7467](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/88d7467bf951e5903367d59181ecf18b5984165a)). Add EngravingRule RepeatEndStartPadding (previous default 0.0, now 2.0)
* **Undefined errors:** ([#1051](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1051)) Add some more safeguards for undefined variables in complex/messy midi scores ([e0d70bc](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/e0d70bc67d26465078fc224c69615bd0789cdaa3))

### Miscellaneous
* **Dependencies:** Update JSZip to 3.7.1


# [1.1.0](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/1.0.0...1.1.0) (2021-07-27)


### Bug Fixes

* **BPM:** Correctly parse float BPM and dotted beats ([#1045](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1045), merge [#1046](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1046)) ([aa2a0e7](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/aa2a0e7f4cdd4a43976b4df89827046495449258))
* **ChordSymbols:** Prevent multiple rest measure generated over rest measures with chords ([#955](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/955)) ([d1e454b](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/d1e454bd400060a5b305022fd87c016681a6c3f7))
* **GetNearestNote:** Handle undefined parentStaffEntry ([#1029](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1029), PR [#1031](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1031)) ([6ca4a05](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/6ca4a058c9eefb0f240655900d3ef40ed3b6ab6e))
* **Multirest:** Fix repetition measures included in multiple rest measure ([#901](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/901)) ([e624f6a](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/e624f6a058aaba1eaf3e6ad708c95b8c886ab6ab))
* **Note Alignment:** Fix notes not sharing stems/note heads ([#414](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/414)), voices not aligned ([#947](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/947)). Fix visual differences on re-render. ([d9aabab](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/d9aababa59d26d4aa3c2ef6ae93eebc3a41b8b78))
* **Slurs:** Ignore measure numbers, improve staff split slurs, add optional softening mechanism ([bc71de7](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/bc71de774db0a3e4e91d8230d758fd41b15c30e1))
* **Tabs:** Correctly read number of stafflines if staff-details node is given for multiple staves ([#1041](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1041)) ([341b696](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/341b696641f0c9fba5a716a6ffa39fa83f2ac34d))



# [1.0.0](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/0.9.5...1.0.0) (2021-05-06)


### Bug Fixes

* **Barlines:** Correctly place thin double line as end barline/StaveConnector ([#1019](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1019)), instead of beginning ([eee1c03](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/eee1c0330caab441f27263639dbb69be039ce25d))
* **Error:** Fix error when sorting unpitched note in a chord ([#995](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/995)) ([47d7beb](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/47d7bebb2ff181dd1a166d45a4b561c31a35a8ba))
* **GraphicalNote:** Fix getSVGElement throwing exception instead of returning undefined for MultiRestMeasure ([b38693d](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/b38693d5d08b6fa33f162a137c810fb829b3d509))
* **RepetitionSymbols:** Fix d.c., d.s. x position ([#990](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/990)) ([eae08cd](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/eae08cde29691f11203916fe9e5d8f3762fbd856))
* **SingleStaffline:** FollowCursor: Don't center the vertical axis ([#1014](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1014)) ([f3bc721](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/f3bc721d8dc5a5e22f723938bdd6d06986308423))
* **Skyline:** Fix bottom line values undefined ([#992](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/992)), fixes issues with PageFormat for tabs ([8559527](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/8559527d2c0c0d19ea8310d02e5351196806b9bb))
* **Tabs:** Correctly set number of stafflines, e.g. 4 for bass guitar ([#991](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/991)) ([8d83c90](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/8d83c900a59a2313873b9f9e13dea3e95c796868))
* **Ties:** Highest tie goes upwards (orientation), lower ties downwards (in same location) ([d8af331](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/d8af331185452bdfef6614f27770493830e6191a))
* **Ties:** Read orientation from XML, reliably set it above/below for chords ([#1020](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1020)) ([070de0f](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/070de0f40595e6edb7ccc84e408eaa05b7cc25e1))
* **Tuplet/Repeat:** Fix tuplet number placement, fix repeat lines across multiple stafflines (StaveConnector) ([#1016](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/pull/1016))
* **Wedges:** Fix crescendo/decresc. lengths, positioning, etc ([3e65761](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/3e657618a0ee9d8628edfe0e3371be86f9b546ac))


### Features

* **Accidentals:** Add support for three-quarter flats and sharps ([#999](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/999)) ([98a5793](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/98a5793e127dc36b2d1d98f94e5c9596d26c735c))
* **Options:** Add osmd.rules.FingeringPositionFromXML ([#993](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/993)), can be auto by setting false now. ([d864b9e](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/d864b9ef47c900da919d51f9b602391b273cd01e))
* **Cursors:** Can now add multiple cursors, with new options like highlighting the current measure, color and alpha value, see [PR 972](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/pull/972) and [#1005 (comment)](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/1005#issuecomment-833981960) for usage.
* **TransposeCalculator:** Add TransposeCalculator, allowing arbitrary transposing of sheets by x semitones. Now out of early access and open source thanks to our [Github Sponsors](https://github.com/sponsors/opensheetmusicdisplay). See [#733 (comment)](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/733#issuecomment-823530818).


## [0.9.5](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/0.9.4...0.9.5) (2021-03-03)


### Bug Fixes

* **Array.prototype:** Ease Array.prototype pollution by using Object.defineProperty, potentially solving library conflicts like with pdf.js ([#980](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/980)) ([ecc1d8f](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/ecc1d8fa5704e860c8d50c28280139e0355e9720))
* **AutoMultiRest:** Enable multiple rest measure when invisible instrument would have prevented it ([#981](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/981)) ([d406341](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/d40634105df6fcf229441d42c1f1dcdc46a904fd))
* **Build:** Add missing MusicParts exports (MusicPartManager etc) ([5349f30](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/5349f303d500b88bb79f383711a39cebab4b5893))
* **Rehearsal Marks:** Fix shifted position when sheet has a pickup measure ([#983](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/983)) ([5c4343d](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/5c4343d45a1f98784fa70c1108c8a5aad6fb5db4)), closes [#985](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/985) [#985](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/985)


### Features

* **Options:** Add options.OnXMLRead ([#982](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/982)), a function to modify the XML after reading, before parsing ([b2be3e8](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/b2be3e898deb1a24f40c4f8253a938cde526708b))



## [0.9.4](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/0.9.3...0.9.4) (2021-02-22)

### Bug Fixes

* **Slurs:** The parameters for slur flattening were fine tuned to not flatten mid-length, mid-angle slurs ([#971](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/971))
* **Transposing:** Some necessary changes for the transposition plugin hotfix (Sponsor early access build)

## [0.9.3](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/0.9.2...0.9.3) (2021-02-18)

### Bug Fixes

* **Beams:** Fix long stems for notes in beams ([#954](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/954)) when different (wrong) stems given in XML ([8b1d898](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/8b1d898750b524d2141eddcbe236173cc8705a16))
* **Clefs:** Fix mid-measure clef added at wrong position ([#954](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/954)) because of forward/backup node. ([1a77ae8](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/1a77ae8541c288ff54a24a366251a2cf104b79fd))
* **NotePositions:** GraphicalNote boundingbox position improved ([#966](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/966), [#967](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/967)), osmd.graphic.GetNearestNote working ([1fde0f6](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/1fde0f6ca364e2c7f0509001a8fbae3947f2c430))
* **Slurs:** Read slur orientation from xml ([#962](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/962)) (Sibelius alternative to placement) ([4ab1c44](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/4ab1c4403020020022cb153ff321389cf90f3007))
* **Slurs:** Reduce height of long, steep slurs by flattening them ([#971](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/971)) ([f128913](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/f128913e2cc78ef7354d087ac133fe86334797a7))
* **Stems:** Respect stem "None" in XML: don't display stems ([#964](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/964)) ([941c50b](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/941c50b6f0e564dc84311eeae11a1e81958f6e17)), closes [#951](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/951)
* **StringNumbersClassical:** Write as roman numerals, offset positioning, etc ([#957](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/957), [#949](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/949)) ([20b8cc9](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/20b8cc90e91e6fc4040b59ddc32ba17d568ee594))


### Features

* **ChordSymbols:** Add osmd.rules.RenderChordSymbols (false now supported) ([fe19427](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/fe19427f31879fca7c806240451f6e6ee85e9686))
* **Cursor:** Add rules.DefaultColorCursor ([#961](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/961)) ([3170486](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/317048691f60ce89100efbc0cb4952eeca1b71f2))
* **Drawer:** Add drawer.DrawBoundingBox() as standalone method (([#969](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/969)), ([#961](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/discussions/961)))
* **Overlays:** drawLine(), drawRectangle() etc returns removable svg node, add backend.removeNode() ([#970](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/970)) ([dc9c66a](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/dc9c66a83a6beaa40041ba6860bc7bf26421d5ed)), closes [#961](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/961) [#b5f3f5](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/b5f3f5)
* **String Numbers:** Add option osmd.rules.RenderStringNumbersClassical ([#949](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/949)) (boolean) ([5500251](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/5500251c8dfbf4a6589ca41a6307945ef6c8041a))





### Bug Fixes

* **Cursor:** Fix bounding box/cursor position when only one vertical measure has an endClef ([#872](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/872)) ([8b40dd3](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/8b40dd395fe18f3c55d3d0aa1e0585b782241d1e)), related to [#797](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/797)


### Features

* **Chords:** Add options for chord alignment, relative x offset ([#948](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/948)) ([143899b](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/143899b74226be22c3929b61439fac4ff40c2937))
* **Rehearsal Marks:** Render Rehearsal Marks ([#919](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/919)), add several RehearsalMarks EngravingRules ([c931341](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/c93134177fa390914a06a0e2a54599011353d834))
* **Rehearsal Marks:** Add osmd.rules.RehearsalMarkXOffsetSystemStartMeasure ([#919](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/919)) (default -20[px]) ([84d60e1](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/84d60e149905e5e0c9f2e1526b7c5a50931b9005))
* **StringNumber:** Display XML String number (e.g. violin) ([#949](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/949)) ([9aba63c](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/9aba63cebde76398cbca596d7c52ba892ca0c171))



## [0.9.1](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/0.9.0...0.9.1) (2021-01-26)

### Bug Fixes

* **Accidentals:** Remove many unnecessary extra courtesy accidentals not given in XML ([#747](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/747)) ([7493be9](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/7493be919826e481572e327949e4f7cf59fac790))
* **PercussionOneLineXMLDisplayStep:** Display XML position correctly in all cases ([#945](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/945)) ([3eb4747](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/3eb474734fda421c3033c9f7ffc4cf64e92f24af))


# [0.9.0](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/0.8.7...0.9.0) (2021-01-25)


### Bug Fixes

* **Articulations:** Don't assume placement above by default ([#921](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/921)) (e.g. staccato) ([6f4dc27](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/6f4dc273dd5cf648b0ddc36920592a3f0ef17d29))
* **Chords:** Fix rare error with chords having accidentals on the wrong note ([#944](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/944)) ([5177806](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/517780643d424cc2685ee146b34a8dbfe7f7f43e))
* **Cursor:** Ignore hidden parts for cursor.next: Always move to next visible voice entry ([#929](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/929)) ([7ca20d1](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/7ca20d1b5f6031dbcbaaf4bbe2dbaceeea75f168))
* **Directions:** Fix Segno, Coda and To Coda positioning (#920): To Coda at end, Segno at beginning of measure ([9643493](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/9643493b00e8769040a0a1bb58cfe38acef6a7f5)), closes [#920](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/920) [#920](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/920) [#920](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/920)
* **Exports:** Add 4 missing exports from MusicalScore/Graphical/Vexflow ([#935](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/935)) ([cab1a23](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/cab1a2338d80d0a7f5105aafa2950d151e152b90))
* **Fingerings:** Display fingerings and arpeggios for grace notes ([#878](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/878)) ([e02556d](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/e02556db34f16795bea2513e2677b662a6508195))
* **Layout:** Fix tuplets starting with rest notes not layouted correctly (shorter length) ([#936](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/936)) ([1e70f83](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/1e70f8302922e735a137d41814dacf8b1d73b4ae))
* **Layout:** Pickup measures aren't unnecessarily wide anymore ([#938](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/938)) ([f02bce1](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/f02bce1b655b2f0b0ebbe774f3f5ac3a26a78755))
* **Layout:** Widen pickup measure per staffentry accidental ([#938](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/938)) ([e1f6277](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/e1f6277962b1fbca0bfa939ed1646c328570dcfe))
* **Lyrics:** Read and display multiple text nodes separated by elision on single syllabic ([#941](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/941)) ([1883ddd](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/1883ddd04e7fb60298afaa166f469a473837b5f6))
* **Metronome:** Better avoid collisions with tempo instructions, especially at the beginning of a sheet ([eed0606](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/eed0606efb995969f0a5b1cf51b15e87de921118))
* **Options:** SystemComposerDistance leaves same distance for single and multiple composer lines ([#917](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/917)) ([61ae292](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/61ae292b8d300615b02b954364176e424f44b02b))
* **StaveRepetitions:** Fix To Coda, D.S. etc. not positioned correctly ([#920](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/920)). Add EngravingRule RepetitionSymbolsYOffset ([06a86b0](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/06a86b07577ba30e5fa2402580ea94f80c09a6b7))
* **Stems:** Don't auto-stem beams for tuplets ([#945](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/945)), respect SetWantedStemDirectionByXml ([026db91](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/026db91d56ad5dd4fdc6d4034072b77168113e74))
* **Stems:** Don't force direction for beamed notes with SetWantedStemDirectionByXml=true ([#945](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/945)) ([40d822e](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/40d822e80e7c44246d06f1153738afd7333849bb))


### Features

* **Chords:** Display complex (Jazz) Chords correctly ([#933](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/933)), e.g. G7(b9,[#11](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/11))/B, add EngravingRules.renameChord(), addChordName() ([9ee524a](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/9ee524a34c42710bff144cdb1ba0c1a2a684d586)), closes [#930](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/930) [#873](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/873) [#590](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/590) [#786](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/786)
* **Chords:** Elongate measures for chords - prevent most chord collisions (merge PR [#928](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/928)) ([ba3ae42](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/ba3ae428b55783b42a42704bca7a530eec3fdb35))
* **Export:** Add SVG export to OSMD and generateImages_browserless.js -> png|svg option ([#670](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/670)) ([8cf4567](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/8cf4567e19dd58e37a1a8930f40960b5c71a3ef1)), closes [#932](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/932) [#932](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/932)
* **GraphicalNote:** Add osmd.rules.GNote(note) ([#660](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/660)) to get GraphicalNote from Note ([d1d12c9](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/d1d12c91ca252681097c4883d8425b0863b8267f)), closes [#559](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/559)
* **GraphicalNote:** Add static GraphicalNote.FromNote(note, osmd.rules) ([#660](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/660), [#659](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/659)) ([acf1c6e](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/acf1c6ee64366db2d30b7cf942598c51710d9424))
* **KeySignatures:** Add EngravingRules.RenderKeySignatures ([#894](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/894)) (false now supported) ([09c8c61](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/09c8c6193b22e7885b203109322b61765cb868a4))
* **Options:** Add PickupMeasureWidthMultiplier to EngravingRules ([#938](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/938)) ([530d078](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/530d078a94f11487ce39902a7cfb80cf275323fc))
* **PercussionOneLine:** Add EngravingRules.PercussionOneLineUseXMLDisplayStep ([#945](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/945)) ([33a7184](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/33a7184b5259a13c8c01e107372a23e38c91a822))
* **PercussionOneLine:** Add osmd.rules.PercussionOneLineXMLDisplayStepOctaveOffset ([#945](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/945)) ([5f5d4e9](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/5f5d4e94510f99925ebb8c645f551aeb63ce3010))



## [0.8.7](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/0.8.6-demofix...0.8.7) (2020-11-05)


### Bug Fixes

* **Accidentals:** Remember quarter sharp/flat, don't automatically put a natural after them ([#903](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/903)) ([0696624](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/0696624d7765144440ad47c32599196aa6debac5))
* **Beams:** Fix beams in tuplets with disconnected stems ([#907](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/907)) ([8a97d47](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/8a97d4754bc990eddc8aeb9c75e743b452088d26))
* **Beams:** Fix beams with tuplets ([#907](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/907)). Add EngravingRules FlatBeams, FlatBeamOffset, FlatBeamOffsetPerBeam ([7207676](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/7207676c2882d97fa8252221d8de8018dfadfc1e))
* **Beams:** Fix nested beams, erroneous xml beam numbers ([#909](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/909)). Save IsGrace in Note ([a0df576](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/a0df576aa6673fc89c900ed559ad07926d2c6ae1))
* **ChordSymbols:** Render Natural Harmonic ([#887](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/887))
* **Compact mode:** Compact mode is now even more compact, doesn't add system margin ([#898](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/898))
* **Empty Measures:** Prevent a Vexflow bug where a measure was empty because a modifier width was NaN ([a0dbc4f](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/a0dbc4f6254b723d15007457bd82dfe36810eeb5)), closes [#899](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/899) [#49](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/49)
* **Fingering:** Associate fingering with correct note when not all notes have fingerings, save Note.Fingering ([#889](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/889)) ([a59e5d9](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/a59e5d97398b6b22ef6b410aa8586fc8847885f3))
* **Iterator:** Fix iterator.clone(): start at iterator.currentTimeStamp if startTimeStamp undefined ([#896](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/896))
* **Layout:** Don't add first system's border to margin below title. Saves a lot of space. ([5c32ff1](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/5c32ff14be9efb0653ceda267613c500234b409a)), closes [#898](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/898)
* **Octave Shifts:** Fix ottavas (octave shifts) not generated correctly over multiple systems ([#591](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/591)) (PR [#777](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/777)) ([11e9c20](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/11e9c20beccaa01e075f4994515c95e9ec9cf896))
* **Rhythm:** Don't print rhythm twice even if given in pickup measure and following measure ([#890](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/890)) ([d34f5e4](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/d34f5e4d41d15b154e30d9fb3cae630f3430a3b2))
* **Skyline:** Replace undefined values with neighboring values. Fix some tab scores ([#911](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/911)) ([e824928](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/e824928983f84e6f72d28394f037be7621cbc56d))
* **Zoom:** Fix pageBackgroundColor not filling entire page for zoom < 1 ([#904](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/904)) ([d795e7b](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/d795e7b90f8530bbe615ef696dc217b76f4e5e7c))
* **Zoom:** Fix using += with osmd.Zoom by adding osmd.Zoom getter ([3cb7fc2](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/3cb7fc22d3ce695c3605ce74352ef47da52b4d55)), closes [mpat#75](https://github.com/mpat/issues/75)


### Features

* **Slurs:** Take slur placement from XML by default ([#827](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/827)). add EngravingRules.SlurPlacementFromXML ([4cb3de9](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/4cb3de9183697357c1039794b66ad016e6253d9f))
* **Log:** Add log level silent (no console.logs)
* **osmd.Sheet:** Add setter for TitleString, SubtitleString, ComposerString, LyricistString (no need to give Label)
* **Tremolo:** Add TremoloStrokeScale and TremoloYSpacingScale in EngravingRules ([887](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/887))



## [0.8.6](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/0.8.5...0.8.6)  (2020-09-15)

### Bug Fixes
* **Voltas, Tabs**: Fix regression in 0.8.5 where repetition volta shift and tabnote svg id fixes were not applied (will soon be automatically fixed by vexflow patch script)

### Miscellaneous
* **Build**: Build size down to 1.1MB again from mysterious increase to 1.3MB in 0.8.5

## [0.8.5](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/compare/0.8.4...0.8.5) (2020-09-08)


### Bug Fixes

* **Container height:** Small scores don't significantly exceed bounding box anymore (SVG height). Fix PageBottomMargin ([#875](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/875)) etc ([c43565c](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/c43565c970e2344f7867d463e6885b8eaa63f204)), closes [#788](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/788)
* **Rests:** Fix rests in pickup measures (e.g. 8th pickup in 4/4 time) turned into whole measure rests or multiple measure rests. ([f1478a6](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/f1478a6e52c34b4ea3710be1cec197c3e445981f))
* **Tabs:** Fix multi-rest for tabs. Never create fingerings for tabs, for now ([ed8d174](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/ed8d174ee2137f8bdbc665ed9c70ef0d050c631a))


### Features

* **Measure Numbers:** Display measure numbers (labels) as given in XML ([#541](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/541)) ([6f5d77a](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/commit/6f5d77a9efbe29d8e210c8715c01548f1bc067f3)), closes [#879](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/879)
* **Options:** Add drawUpToPageNumber and drawUpToSystemNumber options ([#835](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay/issues/832))
