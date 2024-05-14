// Next
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

// i18n
import useTranslations from 'i18n';

// Modules
import { NotFoundScreen } from 'modules/screens/notFound';

// Components
import { Layout } from 'components/layout';

const NotFound = () => {
  const { asPath } = useRouter();
  const t = useTranslations();

  return (
    <>
      <Head>
        <title>
          {t('company')} - {t('pages.not_found')}
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://WorkDataCloud.com${asPath}`} />
      </Head>
      <Layout>
        <NotFoundScreen />
      </Layout>
    </>
  );
};

export default NotFound;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../i18n/locales/${locale}.json`)).default,
    },
  };
}
