# Shishu · Number Oracle Journal

[繁體中文](README.md) | English

A static web app for desktop and mobile. No package installation is required: open `index.html` locally or host the files on GitHub Pages. The interface and readings are currently in Traditional Chinese; this document is the English guide.

[Open the website](https://wf880180.github.io/number-oracle/)

## How to use

1. Enter three groups of exactly three digits, such as `178 589 006`. You can also paste all nine digits together: `178589006`. Leading zeros are preserved.
2. Choose a required topic: Work (工作), Relationships (感情), Family (家庭), or Other (其他). The default is Other.
3. Optionally add a note about your question. Notes are saved for reference and do not generate personalized readings.
4. View the original hexagram, moving line, resulting hexagram, and interpretation. You can save the entry, copy the reading, or export saved entries as CSV.

## Calculation rules

Each complete three-digit number participates in the calculation:

| Group | Calculation | Result |
| --- | --- | --- |
| First | Remainder after division by 8; treat 0 as 8 | Upper trigram |
| Second | Remainder after division by 8; treat 0 as 8 | Lower trigram |
| Third | Remainder after division by 6; treat 0 as 6 | Moving line |

Trigram numbering: 1 Qian (乾, Heaven), 2 Dui (兌, Lake), 3 Li (離, Fire), 4 Zhen (震, Thunder), 5 Xun (巽, Wind), 6 Kan (坎, Water), 7 Gen (艮, Mountain), and 8 Kun (坤, Earth).

Lines are counted from bottom to top. Flipping the moving line from yin to yang, or vice versa, produces the resulting hexagram.

Example: `178 589 006` gives **Lake over Wind — Great Excess (澤風大過, 28)**, with the sixth line moving, changing to **Heaven over Wind — Coming to Meet (天風姤, 44)**.

## Readings and topics

The app includes modern summaries for all 64 hexagrams, original and resulting hexagram explanations, stage guidance based on the six line positions, and a combined reading.

Other preserves the general interpretation. Work, Relationships, and Family provide contextual guidance based on the hexagram's themes and moving-line position. Switching topics updates the reading without changing the calculated hexagrams.

These are predefined interpretations, not real-time AI predictions. Moving-line guidance describes the general significance of a line's position; it is not a translation of the individual line text for each hexagram. The prose is modern explanatory writing rather than quotations from classical sources.

Saved entries, copied readings, and CSV exports include the selected topic. Older entries without a topic are treated as Other.

## Deploy to GitHub Pages

1. Create a repository named `number-oracle` in your GitHub account. Use a public repository for free public hosting on GitHub Free.
2. Upload `index.html`, `style.css`, `core.js`, `reading.js`, `app.js`, `.nojekyll`, `README.md`, `README.en.md`, and `test.cjs` to the repository root. Upload the files themselves, not an enclosing folder.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose the `main` branch and `/ (root)`, and save.
4. Once GitHub finishes publishing, open `https://YOUR-USERNAME.github.io/number-oracle/`, replacing `YOUR-USERNAME` with your account name.

Calculations run in browser-side JavaScript. No Python server, API key, or build step is required.

## Records and privacy

Entries are stored in the current browser's `localStorage`. They are not uploaded to GitHub and do not sync between accounts, devices, browsers, or the local-file and hosted versions.

Clearing site data removes saved entries. Export CSV backups regularly. CSV files can be kept externally or imported into Notion; the app currently does not support importing them to restore entries.

## Validation

With Node.js installed, run:

```sh
node test.cjs
```

The test covers input validation, leading zeros, zero-remainder handling, the worked example, and all 384 moving-line transformations across the 64 hexagrams.

