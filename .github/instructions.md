# Base64 Converter - Project Instructions

A modern web application for converting files and images to base64 format.

## Project Setup Checklist

- [x] Verify that the copilot-instructions.md file in the .github directory is created.
- [x] Clarify Project Requirements - Next.js with TypeScript, Tailwind CSS
- [x] Scaffold the Project
- [x] Customize the Project with base64 conversion functionality
- [x] Install Required Dependencies  
- [x] Compile the Project - Build successful without errors
- [x] Create and Run Task - Development tasks added to .vscode/tasks.json
- [ ] Launch the Project 
- [x] Ensure Documentation is Complete

## Technology Stack
- **Framework**: Next.js 16.2.3 (App Router with Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with @tailwindcss/postcss
- **Package Manager**: npm
- **Node.js**: v24.14.1
- **Build Tool**: Turbopack (default in Next.js 16)

## Project Purpose & Features
Build a web application that allows users to convert files and images to base64 format:

### Core Features
- ✅ File upload and automatic conversion
- ✅ Base64 output with text area display
- ✅ Copy-to-clipboard functionality
- ✅ Download base64 output as text file
- ✅ Support for multiple file types
- ✅ Responsive design with Tailwind CSS
- ✅ Modern gradient UI with file preview

### Project Structure
```
base64-convertor/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Main application
│   └── globals.css             # Global styles
├── components/                 # Reusable components
├── public/                     # Static assets
├── .vscode/
│   └── tasks.json             # Development tasks
├── .github/
│   └── copilot-instructions.md # This file
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── .eslintrc.json             # ESLint configuration
├── package.json               # Dependencies
├── README.md                  # Project documentation
└── .gitignore                 # Git ignore rules
```

## Development Commands

### Run Development Server
```bash
npm run dev
```
Starts Next.js development server at http://localhost:3000

### Production Build
```bash
npm run build
```
Creates optimized production build in `.next` directory

### Start Production Server
```bash
npm start
```
Runs production build

### Run Linter
```bash
npm run lint
```
Check code quality with ESLint

## Available VS Code Tasks
- **npm: dev** (default build task) - Starts development server
- **npm: build** - Creates production build
- **npm: start** - Runs production server
- **npm: lint** - Runs ESLint

Press Ctrl+Shift+B to run the default development task.

## Key Implementation Details

### Page Component (app/page.tsx)
- **Client Component**: Uses 'use client' directive for browser APIs
- **FileReader API**: Converts files to base64 using FileReader
- **State Management**: React hooks for file, base64 output, and loading states
- **Features**:
  - Drag and drop support
  - Real-time conversion
  - Copy to clipboard
  - Download output file
  - File size display

### Styling
- Built with **Tailwind CSS v4** using the new @import syntax
- Gradient backgrounds and modern design
- Responsive grid layout (mobile and desktop)
- Smooth scroll behavior
- Gradient button effects

### Build Configuration
- **Turbopack enabled** for faster builds
- **TypeScript strict mode** enabled
- **Absolute imports** support with @/* alias
- **ESLint** for code quality
- **Tailwind CSS v4** with @tailwindcss/postcss

## Dependencies

### Production
- next@16.2.3
- react@19.2.5
- react-dom@19.2.5

### Development
- TypeScript@6.0.2
- Tailwind CSS@4.2.2
- @tailwindcss/postcss
- PostCSS@8.5.9
- Autoprefixer@10.4.27
- ESLint@10.2.0
- @next/eslint-plugin-next@16.2.3
- @types/node@25.6.0
- @types/react@19.2.14

## Setup Notes

- Node.js location: F:\apps\node
- Project folder: c:\Users\DELL\web_applications\Base64Convertor
- All npm commands include PATH setup for Node.js location
- Development server runs on http://localhost:3000
- Production build outputs to .next directory

## Next Steps to Run

1. Start development server: `npm run dev`
2. Open browser to http://localhost:3000
3. Upload any file to convert to base64
4. Copy output or download as text file

## Troubleshooting

If npm commands don't work:
1. Ensure Node.js is installed at F:\apps\node
2. Add to PATH: `$env:Path += ";F:\apps\node"`
3. Restart terminal if PATH was updated

## Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## License
MIT License
