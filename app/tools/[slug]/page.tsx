import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { Base64Workbench } from '@/components/base64-workbench';
import { getToolPageBySlug, toolPages } from '@/lib/tool-pages';

interface ToolPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return toolPages.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolPageBySlug(slug);

  if (!tool) {
    return {};
  }

  const title = `${tool.label} Online`;

  return {
    title,
    description: tool.description,
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
    openGraph: {
      title: `${title} | Base64 Studio`,
      description: tool.description,
      url: `https://dhebe.com/tools/${tool.slug}`,
      type: 'website',
    },
    twitter: {
      title: `${title} | Base64 Studio`,
      description: tool.description,
    },
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolPageBySlug(slug);

  if (!tool) {
    notFound();
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: `${tool.label} | Base64 Studio`,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    url: `https://dhebe.com/tools/${tool.slug}`,
    description: tool.description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <>
      <Script
        id={`tool-structured-data-${tool.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Base64Workbench
        initialTool={{
          kind: tool.kind,
          id: tool.id,
        }}
      />
    </>
  );
}
