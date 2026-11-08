# PathFinder browser adaptation

Source: https://github.com/ltinphan/PathFinder/tree/7d5c97e68f2ed768247bd92ecf97d1aa5806f98b/web

Pinned fork commit: `7d5c97e68f2ed768247bd92ecf97d1aa5806f98b`
Upstream: https://github.com/kevinwang1975/PathFinder
Upstream base: `d067f683a942d3978975a24ac9e4b5fa2c418d49`
Original author: Kevin Wang. Browser adaptation: Luong Tin Phan.
License: Apache-2.0; full text in LICENSE.txt.

The six runtime/license files are exact copies from the fork's web directory.
Changes from Java: incremental JS search; 4/8 directions; consistent Manhattan/octile heuristic; diagonal movement requires both adjacent side cells to be free. The original Java files remain unchanged in the fork.

When updating, test the fork (node --test web/tests/\*.test.mjs), copy the six files, and update this pinned commit. Do not embed an unpinned remote runtime.

RRT, RRT* and PRM are new extensions by Luong Tin Phan, not features of the upstream Java project. sampling.mjs adds deterministic continuous sampling, segment/rectangle collision checks, RRT* rewiring with descendant cost propagation, and a finite-roadmap Dijkstra query for PRM. Length units and finite-budget limitations are described in the UI and fork documentation.

RRT stops at its first collision-free connection to the exact goal. Its tree, path, random generator and counters then stay fixed while RRT\* continues improving and PRM continues constructing its roadmap up to their trial limits. App and grid-search module URLs are versioned with traversal-20261108; the sampling module retains rrt-stop-20261106 to avoid stale browser/CDN code.

BFS and DFS are also new additions to the browser edition. Both use the same grid, endpoints and neighbor insertion order, mark nodes on insertion, and stop on removing the goal. BFS uses FIFO; DFS uses LIFO. Their depth/predecessor inspector shows the actual next-to-remove order. BFS minimizes edge count, not the general weighted 10/14 path cost; DFS does not claim optimality. The fork includes independent all-pairs reference tests and a browser-test CI job.
