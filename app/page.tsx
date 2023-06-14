import { HeroHome } from '@components/Block/Hero/Home';
import { ListArticle } from '@components/Block/List/Article';
import { generateSeo } from '@lib/seo';
import { t } from '@i18n';

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  return generateSeo({
    title: 'Home',
    description: t('pages.landing.hero-section.subtitle'),
  });
};

const Home = async () => {
  return (
    <main className="overflow-x-hidden">
      <HeroHome />
      <ListArticle
        data={{
          title: {
            content: 'Latest',
            as: 'h2',
          },
          introduction:
            'My writings about web development, productivity & human-computer interactions.',
        }}
        limit={3}
      />
    </main>
  );
};

export default Home;
