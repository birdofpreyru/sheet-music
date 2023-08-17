# Sheet Music

[![Latest NPM Release](https://img.shields.io/npm/v/@dr.pogodin/sheet-music.svg)](https://www.npmjs.com/package/@dr.pogodin/sheet-music)
[![NPM Downloads](https://img.shields.io/npm/dm/@dr.pogodin/sheet-music.svg)](https://www.npmjs.com/package/@dr.pogodin/sheet-music)
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/birdofpreyru/sheet-music/tree/master.svg?style=shield)](https://app.circleci.com/pipelines/github/birdofpreyru/sheet-music)
[![GitHub Repo stars](https://img.shields.io/github/stars/birdofpreyru/sheet-music?style=social)](https://github.com/birdofpreyru/sheet-music)
[![Dr. Pogodin Studio](https://raw.githubusercontent.com/birdofpreyru/sheet-music/master/.README/logo-dr-pogodin-studio.svg)](https://dr.pogodin.studio/docs/sheet-music)

_A customized fork of
[OpenSheetMusicDisplay](https://www.npmjs.com/package/opensheetmusicdisplay)
library._

[![Sponsor](https://raw.githubusercontent.com/birdofpreyru/sheet-music/master/.README/sponsor.svg)](https://github.com/sponsors/birdofpreyru)

### Changes vs. Upstream
- Adds the following parameters to OSMD constructor:
  - `maximumLyricsElongationFactor = 2.5` &ndash; The limit of measure extension
    that can be caused by lyrics width. If lyrics of neighbour notes overlap,
    this parameter should be increased.
- A sane fonts management.
- Patched to correctly render multi-line lyric entries, if any.
