import { useState, useEffect } from 'react';
import 'react-notion-x/src/styles.css';
import { NotionPage } from '@/components/NotionPage';
import { NotionAPI } from 'notion-client';
import { Footer, Header } from '@/components';
import Loader from '@/components/Loader';
import { useRouter } from 'next/router';

const notion = new NotionAPI();

export const getStaticProps = async (context) => {
  const pageId = context.params.pageId || rootNotionPageId;
  let recordMap;
  try {
    recordMap = await notion.getPage(pageId);
  } catch (error) {
    recordMap = null;
  }

  return {
    props: {
      recordMap
    },
    revalidate: 10
  };
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  };
}

export default function Page({ recordMap }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (recordMap !== null) {
      setIsLoading(false);
    } else {
      router.replace('/');
    }
  }, [recordMap, router]);

  return (
    <>
      <Header selected={'Resources'} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <NotionPage recordMap={recordMap} />
          <Footer />
        </>
      )}
    </>
  );
}
