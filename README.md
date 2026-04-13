# Base64 Converter

A modern web application for converting files and images to base64 format effortlessly.

## Features

- **File Upload**: Support for any file type (images, documents, archives, etc.)
- **Instant Conversion**: Convert files to base64 format in real-time
- **Copy to Clipboard**: One-click copying of base64 output
- **Download Support**: Download the base64 output as a text file
- **Responsive Design**: Beautiful, modern UI with Tailwind CSS
- **Fast & Lightweight**: Built with Next.js for optimal performance

## Tech Stack

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## Installation

1. Clone or navigate to the project directory:
```bash
cd base64-convertor
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Production Build

Build for production:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
base64-convertor/
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Home page with conversion UI
│   └── globals.css         # Global styles
├── components/             # Reusable components
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Project dependencies
```

## How to Use

1. **Upload a File**: Click on the upload area or drag and drop a file
2. **Automatic Conversion**: The file is instantly converted to base64 format
3. **Copy or Download**: Use the "Copy to Clipboard" button or "Download" button to save the output

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.
