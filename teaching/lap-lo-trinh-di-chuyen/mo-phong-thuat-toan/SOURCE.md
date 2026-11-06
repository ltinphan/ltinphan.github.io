# PathFinder browser adaptation

Source: https://github.com/ltinphan/PathFinder/tree/6b34f422cafd55d97487440a47959c9f0e263324/web

Pinned fork commit: `6b34f422cafd55d97487440a47959c9f0e263324`
Upstream: https://github.com/kevinwang1975/PathFinder
Upstream base: `d067f683a942d3978975a24ac9e4b5fa2c418d49`
Original author: Kevin Wang. Browser adaptation: Luong Tin Phan.
License: Apache-2.0; full text in LICENSE.txt.

The five runtime/license files are exact copies from the fork's web directory.
Changes from Java: incremental JS search; 4/8 directions; consistent Manhattan/octile heuristic; diagonal movement requires both adjacent side cells to be free. The original Java files remain unchanged in the fork.

When updating, test the fork (node --test web/tests/search.test.mjs), copy the five files, and update this pinned commit. Do not embed an unpinned remote runtime.
