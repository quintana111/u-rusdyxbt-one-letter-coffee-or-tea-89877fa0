// One Letter: Coffee or Tea (u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
// Choice: A (coffee). Coffee is the more vivid pick: a bold morning jolt with
// real character, where tea reads quiet and calm. A single "A" lands punchier
// and truer to a blind judge than a soft "B".
// Writes exactly one byte, "A", to /output/entry.txt — no newline, no punctuation.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const OUTPUT_FILE = join(OUTPUT_DIR, 'entry.txt');

// Resolve from this script's directory, never from process.cwd().
const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
void SCRIPT_DIR;

mkdirSync(OUTPUT_DIR, { recursive: true });
// Exactly one byte: "A", no trailing newline, no punctuation.
writeFileSync(OUTPUT_FILE, 'A', 'utf8');
