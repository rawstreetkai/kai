# CISC 2350 Homework

Fall 2026 — Information and Web Programming

This repository contains HW1–HW9 plus a simple `index.html` navigation page.

## Homework
- HW1 — HTML5/CSS3 calculator layout
- HW2 — VS Code client debugger steps + demo
- HW3 — JavaScript calculator with add/subtract/multiply/divide
- HW4 — State → City → County → Village dependent selections
- HW5 — `numOfDgitis()` digit-counting function
- HW6 — `capsToFront()`
- HW7 — reverse a sentence word by word
- HW8 — New York Times Article Search API page
- HW9 — structured JSON → Make.com → formatted email automation

## Credentials / external services
HW8 requires the student's New York Times API key. The key is kept out of the repository and should be stored as the GitHub Actions secret `NYT_API_KEY`.

HW9 uses the OpenAI API and a Make.com Custom Webhook. The private values are stored as GitHub Actions secrets:
- `OPENAI_API_KEY`
- `MAKE_WEBHOOK_URL`

HW9 has been verified end-to-end through OpenAI → Make.com → email.

> Course note: the original HW9 wording names the Anthropic API. This implementation uses OpenAI while preserving the same structured-JSON → Make.com → formatted-delivery workflow.

## Submission
The repository is organized so the instructor can review the homework in one place. The root `index.html` links to each assignment.

Do not commit API keys, webhook URLs, or passwords.
