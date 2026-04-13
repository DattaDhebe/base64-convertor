'use client';

import { useState, useRef } from 'react';

interface ConversionHistory {
  id: string;
  name: string;
  size: number;
  timestamp: Date;
  base64: string;
}

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [base64, setBase64] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<ConversionHistory[]>([]);
  const [imagePreview, setImagePreview] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      processFile(selectedFile);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      processFile(droppedFile);
    }
  };

  const processFile = (file: File) => {
    setFile(file);
    setImagePreview('');
    
    // Show preview for images
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }

    convertToBase64(file);
  };

  const convertToBase64 = (file: File) => {
    setLoading(true);
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setBase64(result);
      
      // Add to history
      const newEntry: ConversionHistory = {
        id: Date.now().toString(),
        name: file.name,
        size: file.size,
        timestamp: new Date(),
        base64: result,
      };
      setHistory((prev) => [newEntry, ...prev].slice(0, 5)); // Keep last 5
      
      setLoading(false);
    };
    reader.onerror = () => {
      setLoading(false);
      alert('Error reading file. Please try again.');
    };
    reader.readAsDataURL(file);
  };

  const copyToClipboard = async () => {
    if (base64) {
      try {
        await navigator.clipboard.writeText(base64);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        alert('Failed to copy to clipboard');
      }
    }
  };

  const downloadBase64 = () => {
    if (base64 && file) {
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(base64));
      element.setAttribute('download', `${file.name.split('.')[0]}.base64.txt`);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  const loadFromHistory = (item: ConversionHistory) => {
    setBase64(item.base64);
    setFile(new File([], item.name));
  };

  const getFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const getOutput64Size = () => {
    return Math.round((base64.length / 1024) * 100) / 100;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header - Professional */}
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">B64</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900">Base64 Converter</h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl">
            Efficiently convert files and images to base64 encoding. Perfect for embedding data URIs, 
            API payloads, and data transmission.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Upload & Preview */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upload Section */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-blue-400 transition-colors">
              <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className="p-8 cursor-pointer hover:bg-blue-50 transition-colors"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-input"
                />
                <label htmlFor="file-input" className="cursor-pointer block text-center">
                  <div className="mb-4">
                    <svg className="mx-auto w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 16v-4m0-4v4m0 0H8m4 0h4M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-gray-900 mb-1">
                    {file ? file.name : 'Upload your file'}
                  </p>
                  <p className="text-sm text-gray-500">
                    Drag and drop or click to browse • Any file type supported
                  </p>
                </label>
              </div>
            </div>

            {/* File Info & Preview */}
            {file && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">File Name</p>
                    <p className="text-gray-900 font-medium truncate">{file.name}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">File Size</p>
                    <p className="text-gray-900 font-medium">{getFileSize(file.size)}</p>
                  </div>
                </div>

                {/* Image Preview */}
                {imagePreview && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Preview</p>
                    <img src={imagePreview} alt="Preview" className="max-w-full h-48 object-contain rounded-lg" />
                  </div>
                )}
              </div>
            )}

            {/* Output Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Base64 Output</h3>
                {base64 && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                    {getOutput64Size()} KB
                  </span>
                )}
              </div>

              {loading ? (
                <div className="flex flex-col items-center justify-center h-64 space-y-4">
                  <div className="w-10 h-10 border-3 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
                  <p className="text-gray-600 font-medium">Converting your file...</p>
                </div>
              ) : base64 ? (
                <div className="space-y-4">
                  <textarea
                    value={base64}
                    readOnly
                    className="w-full h-64 p-4 border border-gray-200 rounded-xl font-mono text-xs bg-white text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="flex gap-3">
                    <button
                      onClick={copyToClipboard}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold py-3 px-4 rounded-xl transition-all"
                    >
                      {copied ? '✓ Copied!' : '📋 Copy to Clipboard'}
                    </button>
                    <button
                      onClick={downloadBase64}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 active:scale-95 text-gray-900 font-semibold py-3 px-4 rounded-xl transition-all"
                    >
                      ⬇️ Download
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <svg className="w-12 h-12 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-500">Upload a file to generate base64 encoding</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - History & Info */}
          <div className="space-y-6">
            {/* Recent Conversions */}
            {history.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Recent</h3>
                <div className="space-y-2">
                  {history.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => loadFromHistory(item)}
                      className="w-full text-left p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                    >
                      <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 truncate">{item.name}</p>
                      <p className="text-xs text-gray-500">{getFileSize(item.size)}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-6">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">About Base64</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Text-based encoding for binary data</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Uses 64 printable ASCII characters</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>~33% larger than original file</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Ideal for data URIs and APIs</span>
                </li>
              </ul>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Features</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-base">⚡</span>
                  <span className="text-sm text-gray-600">Instant processing</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-base">🔒</span>
                  <span className="text-sm text-gray-600">Client-side conversion</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-base">📋</span>
                  <span className="text-sm text-gray-600">One-click copy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
