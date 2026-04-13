'use client';

import { TextSourceConverter } from '@/components/converters/text-source-converter';
import { hexToBase64 } from '@/lib/base64';

export function HexToBase64Converter() {
  return (
    <TextSourceConverter
      inputLabel="Paste Hex"
      inputDescription="Enter hexadecimal content and convert it into a compact Base64 string."
      inputPlaceholder={`89504e470d0a1a0a0000000d49484452\n0000010000000108`}
      outputTitle="Base64 Output"
      outputDescription="Whitespace is ignored and the hex input is validated before conversion."
      emptyState="Paste hexadecimal content and run the conversion to generate Base64 output."
      downloadName="hex"
      transform={hexToBase64}
    />
  );
}
