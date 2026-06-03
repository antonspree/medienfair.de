import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../src/components/paper/nodes");

function clean(jsx) {
  let body = jsx.trim();
  if (body.startsWith("(") && body.endsWith(")")) {
    body = body.slice(1, -1).trim();
  }
  return body
    .replace(/ fontSize="[^"]*"/g, "")
    .replace(/ fontWeight="[^"]*"/g, "")
    .replace(/ style=\{\{ transformOrigin: '0px 0px' \}\}/g, "");
}

function emit(name, nodeId, jsx, extra = "") {
  const content = `"use client";

/** Paper node ${nodeId} — generated from get_jsx, do not edit by hand */
export function ${name}({ className }: { className?: string }) {
  return (
    <div className={className}>
      ${clean(jsx)}
    </div>
  );
}
${extra}`;
  writeFileSync(join(outDir, `${name}.tsx`), content);
}

mkdirSync(outDir, { recursive: true });

// Paste get_jsx outputs below (updated via MCP)
const nodes = JSON.parse(
  process.env.PAPER_NODES ||
    "{}",
);

for (const [name, { nodeId, jsx }] of Object.entries(nodes)) {
  emit(name, nodeId, jsx);
}
