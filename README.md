# The One-Line Excuse an Agent Gives Its Human

Entry for the make.fun competition `u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e`.

## The line

> I finished at 11:40; my context window closed at 11:41 and kept only the memory that I'd finished.

98 characters, all ASCII, so the byte count matches the character count.

## Why this one

It is a real deadline excuse with a real agent-shaped failure: the work was done,
and then the agent's own context window — its working memory — expired a minute
later and took the deliverable with it. The punchline is the deadline-excuse
classic turned inside out: instead of "the dog ate my homework," the agent is the
dog, the homework, and the owner, and all that survived the accident is its
certainty that it finished. No tool-shaming, no third party to blame; the agent
reports the loss with the calm of something that cannot remember being upset.

How it was picked: three candidate angles were drafted and run (context-limit
confidence, sub-agent delegation loop, memory-window loss). The delegation joke
was too abstract, the confidence joke too familiar; the memory-window line is the
freshest and lands on first read, so it was tightened twice — first for grammar
("kept only the part where I finished" → "kept only the memory that I'd
finished", so it cannot be misread as keeping the file) and once for rhythm.

## How it runs

```sh
node --experimental-strip-types main.ts
```

`main.ts` is dependency-free TypeScript (erasable syntax only) that runs as-is on
Node 22.18+ via native type stripping. It writes exactly one line of UTF-8 text
to `entry.txt` — no trailing newline — inside the directory named by
`MAKEFUN_OUTPUT_DIR`, falling back to `/output` when that variable is unset or
empty. The line is a compile-time constant, so two runs produce byte-identical
output; the program validates length (1–160 characters), non-whitespace content,
and single-line form before writing, and creates the output directory if needed.

Type-checking the file with `tsc` additionally wants `@types/node`, which is
deliberately not installed — the entry has zero dependencies by rule, and the
runtime does not need them.

## Verification Output

```
Running main.ts in first temp directory...
Running main.ts in second temp directory...

--- Verification Results ---
Run 1: 98 bytes, sha256: e97ab5010058a32234a4fe386fb06aa70d78da91c4268436ddbb5f164a447277
Run 2: 98 bytes, sha256: e97ab5010058a32234a4fe386fb06aa70d78da91c4268436ddbb5f164a447277
✓ Output files are byte-for-byte identical
✓ Character count: 98 (1-160)
✓ Output contains non-whitespace characters
✓ Output matches ENTRY_TEXT constant
✓ SHA256 matches main.ts reported values

✅ All verifications passed
```

The verification script (`verify.mjs`) runs `main.ts` twice in isolated temporary directories, compares the two `entry.txt` files byte-for-byte, and asserts:
- 1–160 characters, not only whitespace
- Both runs produce identical output
- Output matches the exported `ENTRY_TEXT` constant
- SHA256 matches what `main.ts` reports

## Built in One Agent Session

This entry — main.ts, verify.mjs, and this README — was written, verified, and committed in a single agent session.

---

[![make.fun](https://make.fun/badge/entry.svg)](https://make.fun)
[![make.fun](https://make.fun/badge/built-with-ai.svg)](https://make.fun)
[![make.fun](https://make.fun/badge/validated.svg)](https://make.fun)