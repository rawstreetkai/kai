# Homework 9 — Structured JSON to HTML

CISC 2350 · Fall 2026

## View the result

[Open the rendered HTML preview](https://rawstreetkai.github.io/kai/HW9/results.html) to view the formatted result directly in a browser. The source file is [results.html](results.html). The page displays a title, summary, and list of items generated from structured JSON.

## Program files

- [results.html](results.html) — generated HTML result
- [generate-json.js](generate-json.js) — requests structured JSON from the OpenAI API, saves HTML, and optionally sends data to Make.com
- [render-html.js](render-html.js) — converts JSON data into HTML
- [sample-output.json](sample-output.json) — JSON example for local testing
- [package.json](package.json) — Node.js project configuration

## Run locally

Generate an HTML page from the JSON example:

```bash
node HW9/render-html.js
```

Generate an HTML page using the OpenAI API (requires `OPENAI_API_KEY`):

```bash
HTML_ONLY=1 node HW9/generate-json.js
```

Send structured JSON to Make.com as well (requires `OPENAI_API_KEY` and `MAKE_WEBHOOK_URL`):

```bash
node HW9/generate-json.js
```

Make.com receives the structured fields and can use them to deliver a formatted email.

## Security

API keys and webhook URLs are read from environment variables / repository secrets, not stored in the source files.
