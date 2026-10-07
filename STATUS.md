# CISC 2350 Homework Status

## Prepared in this repository
- [x] HW1 — HTML5/CSS3 calculator layout
- [x] HW2 — VS Code debugger instructions and demo files
- [x] HW3 — JavaScript calculator: add, subtract, multiply, divide
- [x] HW4 — State → City → County → Village selector
- [x] HW5 — integer digit-counting function
- [x] HW6 — capital letters moved to the front using regex
- [x] HW7 — reverse a sentence word-by-word
- [x] HW8 — New York Times Article Search page
- [x] HW9 — structured JSON → Make.com → formatted email workflow

## Verification
- HW9: verified end-to-end through OpenAI → Make.com → email.
- HW8: page and API verification script are present. GitHub Actions currently still needs the repository secret `NYT_API_KEY` before the automated API check can pass.

## External service configuration
- HW8 requires `NYT_API_KEY` as a GitHub Actions secret.
- HW9 uses `OPENAI_API_KEY` and `MAKE_WEBHOOK_URL` as GitHub Actions secrets.
- Secret values are intentionally excluded from this public repository.

## Course requirement note
The original HW9 wording names Anthropic. The current implementation uses OpenAI for the same structured JSON → Make.com → formatted-delivery pipeline.

## Security
The root .gitignore excludes local .env and secret/key files.
