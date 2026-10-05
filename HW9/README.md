# Homework 9 — Anthropic JSON → Make.com → Formatted Email/File

## Goal
Generate structured JSON with the Anthropic API, send that JSON into Make.com, and use Make.com to deliver a formatted email or file.

## Files
- `generate-json.js` — calls Anthropic, parses the structured JSON, and sends it to a Make.com webhook.
- `sample-output.json` — example of the JSON shape.

## Make.com scenario

1. In Make.com, create a **new scenario**.
2. Add **Webhooks → Custom webhook** as the first module.
3. Create a webhook and copy its URL.
4. Add an email module after the webhook, such as **Gmail → Send an email** or another mail provider.
5. Map the incoming webhook fields:
   - `subject` → email subject
   - `summary` → first paragraph of the email
   - `bullets[]` → the bullet list/body
6. Run the Make scenario once so the webhook is waiting for sample data.
7. On your computer, set these environment variables:
   - `ANTHROPIC_API_KEY`
   - `MAKE_WEBHOOK_URL`
8. Run:
   ```
   node generate-json.js
   ```
9. Confirm Make.com receives the JSON and sends the formatted email.

## Example email body

**{{subject}}**

{{summary}}

- {{bullets[1]}}
- {{bullets[2]}}
- {{bullets[3]}}

## Security
Do not commit API keys or private webhook URLs to GitHub.
