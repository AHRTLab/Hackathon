# Team deck generator

`harvest.py` reads every number the deck shows from the dataset (`team_results.py`, the recordings and the
drive logs) into `deck-data.json`; `build.js` turns that into an editable 16:9 `.pptx` with the script in
the speaker notes. The paths at the top of both point at AJ's checkout; change them to yours.

```bash
python harvest.py && npm install && node build.js
```

The finished deck is the `AWARE-AI-Hackathon-Deck.pptx` asset on the `dataset-2026-10-22` release.
