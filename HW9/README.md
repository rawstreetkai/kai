# Homework 9 — OpenAI structured JSON → Make.com → Formatted Email/File

> The original syllabus names the Anthropic API. This implementation uses the OpenAI API instead because the student already has funded OpenAI API access. The automation pattern remains the same: AI API → structured JSON → Make.com → formatted destination.

## Goal
Generate structured JSON with the OpenAI Responses API, send that JSON into Make.com, and use Make.com to deliver a formatted email or file.

## Files
- `generate-json.js` — calls OpenAI, parses strict structured JSON, and posts it to the Make.com webhook.
- `sample-output.json` — example JSON shape.
- `package.json` — run configuration.

## Required GitHub Actions secrets
- `OPENAI_API_KEY`
- `MAKE_WEBHOOK_URL`

## Make.com scenario
1. First module: **Webhooks → Custom webhook**.
2. Add an email/file-delivery module after it.
3. Map the incoming fields:
   - `subject`
   - `summary`
   - `bullets[]`
4. Turn the scenario on, or use **Run once** while testing.

## Example formatted email

**Subject:** `{{subject}}`

`{{summary}}`

- `{{bullets[1]}}`
- `{{bullets[2]}}`
- `{{bullets[3]}}`

## Local test
```bash
OPENAI_API_KEY="..." MAKE_WEBHOOK_URL="..." node generate-json.js
```

## Security
Never commit API keys or private webhook URLs. They belong in environment variables or GitHub Actions secrets.
