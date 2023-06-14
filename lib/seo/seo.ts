import { Metadata } from 'next';
import { BaseMetadata } from '@lib/seo';
import { t } from '@i18n';

export const generateSeo = (metadata: BaseMetadata): Metadata => {
  const url = process.env.VERCEL_URL
    ? 'https://' + process.env.VERCEL_URL
    : 'http://localhost:3000';

  return {
    title: `${metadata.title} | ${t('metadata.owner.name')}`,
    description: metadata.description,
    metadataBase: new URL(url),
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url,
      siteName: `${t('metadata.owner.name')} | ${t('metadata.owner.job-name')}`,
      images: [
        {
          url: `/api/og?title=${metadata.title}&description=${metadata.description}`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en-US',
      type: 'website',
    },
  };
};
