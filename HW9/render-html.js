const { readFile, writeFile } = require("node:fs/promises");
const path = require("node:path");

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function renderHtml(data) {
  const title = escapeHtml(data.subject || "Structured JSON Result");
  const summary = escapeHtml(data.summary || "");
  const bullets = Array.isArray(data.bullets) ? data.bullets : [];
  const items = bullets.map(text => "<li>" + escapeHtml(text) + "</li>").join("\n");
  return [
    "<!DOCTYPE html>",
    '<html lang="en">',
    "<head>",
    '<meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    "<title>" + title + "</title>",
    "<style>",
    "body{font:16px/1.65 Arial,sans-serif;max-width:760px;margin:48px auto;padding:0 20px;color:#1f2937}",
    "h1{font-size:1.7rem;line-height:1.25}main{border:1px solid #e5e7eb;border-radius:12px;padding:30px}",
    "li{margin:10px 0}footer{margin-top:24px;font-size:.9rem;color:#6b7280}",
    "</style>",
    "</head>",
    "<body>",
    "<main>",
    "<h1>" + title + "</h1>",
    "<p>" + summary + "</p>",
    "<ul>" + items + "</ul>",
    "<footer>Rendered as HTML from structured JSON for CISC 2350 HW9.</footer>",
    "</main>",
    "</body>",
    "</html>"
  ].join("\n");
}

async function renderFromFile() {
  const file = process.argv[2] || path.join(__dirname, "sample-output.json");
  const structured = JSON.parse(await readFile(file, "utf8"));
  await writeFile(path.join(__dirname, "results.html"), renderHtml(structured), "utf8");
  console.log("Saved HW9/results.html");
}

if (require.main === module) {
  renderFromFile().catch(error => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = { renderHtml };
