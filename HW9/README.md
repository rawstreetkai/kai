# Homework 9 — Structured JSON to Formatted Output

## Assignment flow

1. `generate-json.js` calls the OpenAI Responses API and parses a JSON object with `subject`, `summary`, and `bullets`.
2. `render-html.js` converts that JSON into an HTML document.
3. `results.html` contains HTML generated from a successful API run.
4. The Make.com custom webhook receives the JSON data and an `html` field. The existing Make.com scenario delivers a formatted email.

## Files

| File | Purpose |
| --- | --- |
| [generate-json.js](generate-json.js) | Request JSON and pass it to the HTML renderer and Make webhook |
| [render-html.js](render-html.js) | Render JSON as HTML |
| [results.html](results.html) | Generated HTML result |
| [sample-output.json](sample-output.json) | Example structured JSON |
| [package.json](package.json) | Node.js run configuration |

## How to view the result

Open or download `results.html` in a browser.

To generate a local HTML page from the example JSON, run:

```bash
node HW9/render-html.js
```

To generate output from the API without calling Make.com, configure `OPENAI_API_KEY` and run:

```bash
HTML_ONLY=1 node HW9/generate-json.js
```

For the complete webhook run, configure `OPENAI_API_KEY` and `MAKE_WEBHOOK_URL`, then run `node HW9/generate-json.js`. The existing Make.com scenario is set up for email delivery; creating an HTML file *inside Make.com* requires an additional Make module and has not been verified.

## Assignment requirement to confirm

The original HW9 instructions specify **Anthropic API**. This implementation currently uses **OpenAI API**. The provider difference requires instructor approval or a change to the implementation.

Keep API keys and private webhook URLs outside committed source files.
