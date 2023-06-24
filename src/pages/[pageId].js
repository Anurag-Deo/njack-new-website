import React, { useState, useEffect } from 'react';
import 'react-notion-x/src/styles.css';
import { NotionPage } from '../components/NotionPage';
import { NotionAPI } from 'notion-client';
import { Footer, Header } from '@/components';
import styles from '../styles/slug.module.css';

const notion = new NotionAPI();

export const getStaticProps = async (context) => {
  const pageId = context.params.pageId || rootNotionPageId;
  const recordMap = await notion.getPage(pageId);
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

  useEffect(() => {
    if (recordMap) {
      setIsLoading(false);
    }
  }, [recordMap]);

  return (
    <>
      <Header selected={'Departments'} />
      {isLoading ? (
        <div className={styles.loading}>
          <div className={styles.opposites}>
            <div className={`${styles.opposite} ${styles.bl}`} />
            <div className={`${styles.opposite} ${styles.tr}`} />
            <div className={`${styles.opposite} ${styles.br}`} />
            <div className={`${styles.opposite} ${styles.tl}`} />
          </div>
        </div>
      ) : (
        <>
          <NotionPage recordMap={recordMap} />
          <Footer />
        </>
      )}
    </>
  );
}
