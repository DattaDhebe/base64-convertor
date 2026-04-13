export async function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
        return;
      }

      reject(new Error('Unexpected file reader output.'));
    };

    reader.onerror = () => {
      reject(new Error('Unable to read the selected file.'));
    };

    reader.readAsDataURL(file);
  });
}

export function bytesToBase64(bytes: Uint8Array): string {
  let binary = '';
  const chunkSize = 0x8000;

  for (let index = 0; index < bytes.length; index += chunkSize) {
    const chunk = bytes.subarray(index, index + chunkSize);
    binary += String.fromCharCode(...chunk);
  }

  return btoa(binary);
}

export function textToBase64(input: string): string {
  return bytesToBase64(new TextEncoder().encode(input));
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) {
    return '0 B';
  }

  const units = ['B', 'KB', 'MB', 'GB'];
  const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / 1024 ** exponent;

  return `${value.toFixed(value >= 10 || exponent === 0 ? 0 : 1)} ${units[exponent]}`;
}

export function formatTextSize(characters: number): string {
  if (characters === 0) {
    return '0 chars';
  }

  if (characters < 1024) {
    return `${characters} chars`;
  }

  return `${(characters / 1024).toFixed(1)} KB text`;
}
