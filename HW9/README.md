# Homework 9 — OpenAI Structured JSON → Make.com → HTML Output

> The original syllabus specifies Anthropic API. This implementation uses OpenAI instead; the provider difference is disclosed rather than represented as Anthropic.

## What it does
1. `generate-json.js` requests strict structured JSON with `subject`, `summary`, and `bullets`.
2. `render-html.js` formats that JSON as an HTML document with escaped text.
3. `generate-json.js` writes the response to `results.html`.
4. The Make.com webhook receives the original fields and an extra `html` field for optional HTML file delivery. The existing Gmail delivery remains available.

## Files
- `generate-json.js` — OpenAI API call, JSON extraction, HTML output, and Make webhook.
- `render-html.js` — JSON-to-HTML renderer, runnable on its own.
- `results.html` — currently a real generated result from an OpenAI API run in GitHub Actions (HTML-only mode, with no Make webhook call). Running the generator again can update it.
- `sample-output.json` — illustrative JSON data.
- `package.json` — Node configuration.

## Review the HTML locally (no API keys required)
From the repository root:

```bash
node HW9/render-html.js
```

Then open `HW9/results.html` in a browser.

## Run the complete API → Make.com workflow
Keep these values only in environment variables / GitHub Actions secrets:
- `OPENAI_API_KEY`
- `MAKE_WEBHOOK_URL`

Run `node HW9/generate-json.js` in the environment where these are set. It generates HTML before calling the Make webhook.

## Make.com HTML file delivery
The existing Make scenario delivers email. The webhook payload now also includes an `html` field. If the assignment requires Make to create the HTML file, add a file-creation step after the webhook, name it `hw9-results.html`, and map the `html` field into its file contents. This Make-side change must be configured and tested in the Make scenario; the existing scenario currently delivers email.

## Security
Never commit keys or private webhook URLs. Do not represent the checked-in preview as an authenticated new API run.
