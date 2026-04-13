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

export function hexToBase64(input: string): string {
  const normalized = input.replace(/^0x/i, '').replace(/\s+/g, '').toLowerCase();

  if (!normalized) {
    return '';
  }

  if (!/^[\da-f]+$/.test(normalized)) {
    throw new Error('Hex input can only contain characters 0-9 and A-F.');
  }

  if (normalized.length % 2 !== 0) {
    throw new Error('Hex input must contain an even number of characters.');
  }

  const bytes = new Uint8Array(normalized.length / 2);

  for (let index = 0; index < normalized.length; index += 2) {
    bytes[index / 2] = Number.parseInt(normalized.slice(index, index + 2), 16);
  }

  return bytesToBase64(bytes);
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
