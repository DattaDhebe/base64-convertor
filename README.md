<h1 align="center">Base64 Studio</h1>
<p align="center"><strong>Encode, decode, preview and export from a browser workbench.</strong><br>Next.js · TypeScript · React · Tailwind CSS</p>

[Quick start](#quick-start) · [Tool coverage](#tool-coverage) · [Code map](#code-map) · [Static hosting](#static-hosting)

A web application for working with Base64 payloads across text, source snippets and binary files. The interface provides dedicated tool pages, file previews, copy/download actions and light/dark themes.

## Tool coverage

The current workbench registers nine encoder components and nine decoder components.

| Data type | Encode | Decode |
| --- | --- | --- |
| Text | Text to Base64 | Base64 to UTF-8 text |
| Image | Image to Base64 | Image preview and output |
| URL | URL string to Base64 | URL output |
| Hex | Hex bytes to Base64 | Hex output |
| PDF | PDF file to Base64 | PDF output |
| HTML / CSS | Source text to Base64 | Recovered source |
| File | File bytes to Base64 | Downloadable file output |
| Audio | Audio file to Base64 | Audio output |

Component registration is visible in [base64-workbench.tsx](components/base64-workbench.tsx). Supported inputs and validation are defined by each implementation.

## Quick start

Use Node.js/npm compatible with [package.json](package.json).

```bash
npm install
npm run dev
```

Open `http://localhost:3000`, choose a tool, paste text or select a file, then copy, preview or download the output.

## Code map

| Location | Role |
| --- | --- |
| [components/base64-workbench.tsx](components/base64-workbench.tsx) | Tool selection, themes and component registration |
| [components/converters](components/converters) | Encoding, decoding and preview components |
| [lib/base64.ts](lib/base64.ts) | Shared conversion utilities |
| [lib/tool-pages.ts](lib/tool-pages.ts) | Dedicated route definitions |
| [app/tools](app/tools) | Tool pages |
| [app/layout.tsx](app/layout.tsx) | Application layout and external script configuration |

Conversion logic is implemented in browser components. The application also includes analytics configuration; local transformation does not imply that the page makes no external requests.

## Static hosting

```bash
npm run build
```

Publish the contents of the generated `out/` directory to your static host, following [next.config.js](next.config.js). Keep source files and `node_modules/` out of the published export.

The broader utilities workspace is maintained separately in [PDF Tools Hub / Dhebe Studios](https://github.com/DattaDhebe/pdf-tools-hub).

## License

See [LICENSE](LICENSE).

Built by [Datta Dhebe](https://github.com/DattaDhebe).
