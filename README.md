# CISC 2350 — Information and Web Programming

Fall 2026 homework repository.

The assignments are organized in individual folders. Open [index.html](index.html) for a list of HW1–HW9.

## Homework 8 — New York Times Article Search

- [Search page](HW8/index.html)
- [Article search results (HTML)](HW8/results.html)
- [Source and setup notes](HW8/README.md)

The interactive search page accepts a New York Times API key entered by the person running the search. A separate GitHub Actions task uses a private repository secret to fetch articles and save the HTML results file. The key is not included in the repository or the results.

## Homework 9 — Structured JSON and HTML

- [Generated HTML result](HW9/results.html)
- [JavaScript source](HW9/generate-json.js)
- [Implementation and setup notes](HW9/README.md)

The OpenAI API generates structured JSON. JavaScript renders that data into an HTML file. The Make.com workflow separately supports formatted email delivery. The HTML-file output from Make.com has not yet been tested.

**API note:** The original HW9 assignment specifies the Anthropic API. This version uses OpenAI, so the API-provider requirement still needs the instructor's approval or an implementation change.

## Other homework

The [assignment index](index.html) links to HW1–HW7. The instructor has already confirmed full credit for those assignments.

## Security

API keys and Make.com webhook URLs are configured as environment variables or GitHub Actions secrets. They are not included in the source files.
