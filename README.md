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
node main.ts
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
