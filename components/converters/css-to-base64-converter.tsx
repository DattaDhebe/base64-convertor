'use client';

import { TextSourceConverter } from '@/components/converters/text-source-converter';
import { textToBase64 } from '@/lib/base64';

export function CssToBase64Converter() {
  return (
    <TextSourceConverter
      inputLabel="Paste CSS"
      inputDescription="Drop in a full stylesheet or a quick rule block and encode it directly to Base64."
      inputPlaceholder={`:root {\n  --brand: #ea580c;\n}\n\n.card {\n  background: linear-gradient(135deg, #fff7ed, #ffffff);\n  border-radius: 24px;\n}`}
      outputTitle="Base64 Output"
      outputDescription="This output is generated locally from your CSS source, ready for storage or transport."
      emptyState="Paste CSS and run the conversion to generate Base64 output."
      downloadName="styles"
      transform={textToBase64}
    />
  );
}
