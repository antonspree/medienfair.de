/** Strip Paper get_jsx artifacts so output is valid React/TSX */
export function cleanPaperJsx(jsx: string): string {
  let body = jsx.trim();
  if (body.startsWith("(") && body.endsWith(")")) {
    body = body.slice(1, -1).trim();
  }
  return body
    .replace(/ fontSize="[^"]*"/g, "")
    .replace(/ fontWeight="[^"]*"/g, "")
    .replace(/ style=\{\{ transformOrigin: '0px 0px' \}\}/g, "");
}
