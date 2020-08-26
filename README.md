![Master Build Status](https://img.shields.io/circleci/project/github/birdofpreyru/sheet-music/master.svg?label=master)
![Dev Build Status](https://img.shields.io/circleci/project/github/birdofpreyru/sheet-music/devel.svg?label=devel)
![Latest NPM Release](https://img.shields.io/npm/v/@dr.pogodin/sheet-music.svg)
![NPM Downloads](https://img.shields.io/npm/dm/@dr.pogodin/sheet-music.svg)

# Sheet Music

_A customized fork of
[OpenSheetMusicDisplay](https://www.npmjs.com/package/opensheetmusicdisplay)
library._

### Changes vs. Upstream
- Adds the following parameters to OSMD constructor:
  - `maximumLyricsElongationFactor = 2.5` &ndash; The limit of measure extension
    that can be caused by lyrics width. If lyrics of neighbour notes overlap,
    this parameter should be increased.
- A sane fonts management.
