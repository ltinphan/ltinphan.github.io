# PathFinder browser adaptation

Source: https://github.com/ltinphan/PathFinder/tree/0cc544d4a85f1b48b560a0fb52a31e2a7c056936/web

Pinned fork commit: `0cc544d4a85f1b48b560a0fb52a31e2a7c056936`
Upstream: https://github.com/kevinwang1975/PathFinder
Upstream base: `d067f683a942d3978975a24ac9e4b5fa2c418d49`
Original author: Kevin Wang. Browser adaptation: Luong Tin Phan.
License: Apache-2.0; full text in LICENSE.txt.

The six runtime/license files are exact copies from the fork's web directory.
Changes from Java: incremental JS search; 4/8 directions; consistent Manhattan/octile heuristic; diagonal movement requires both adjacent side cells to be free. The original Java files remain unchanged in the fork.

When updating, test the fork (node --test web/tests/\*.test.mjs), copy the six files, and update this pinned commit. Do not embed an unpinned remote runtime.

RRT, RRT* and PRM are new extensions by Luong Tin Phan, not features of the upstream Java project. sampling.mjs adds deterministic continuous sampling, segment/rectangle collision checks, RRT* rewiring with descendant cost propagation, and a finite-roadmap Dijkstra query for PRM. Length units and finite-budget limitations are described in the UI and fork documentation.
