import { FunctionComponent } from 'react';
import { Section } from '@components/Layout';
import { Heading, IconGithub, IconLinkedin, Text } from '@components/Typography';
import { Gradient } from '@components/Utility/Gradient';
import { useSocial } from '@hooks/useSocial';
import NextLink from 'next/link';
import { HeroHomeProps } from '@components/Block/Hero/Home/Home.types';
import { useI18n } from '@i18n';

export const HeroHome: FunctionComponent<HeroHomeProps> = () => {
  const { t } = useI18n();
  const { socials } = useSocial();

  return (
    <Section>
      <div className="relative z-10 space-y-10">
        <Heading as="h1" variant="display-1">
          {t('pages.landing.hero-section.title')}
        </Heading>
        <Text>{t('pages.landing.hero-section.subtitle')}</Text>
        <Text
          dangerouslySetInnerHTML={{ __html: t('pages.landing.hero-section.current-job') }}
        ></Text>
        <div className="item-center flex space-x-10">
          <div className="flex items-center space-x-4">
            <NextLink
              href={socials.github}
              title={t('tooltips.github.my-account')}
              target="_blank"
              rel="noreferrer"
            >
              <IconGithub />
            </NextLink>
            <NextLink
              href={socials.linkedin}
              title={t('tooltips.linkedin.my-account')}
              target="_blank"
              rel="noreferrer"
            >
              <IconLinkedin />
            </NextLink>
          </div>
        </div>
      </div>
      <Gradient className="absolute -right-64 top-12 -z-10 md:-right-48 lg:-right-24 xl:right-12" />
    </Section>
  );
};
