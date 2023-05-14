import React from 'react'
import dynamic from 'next/dynamic'
import { Header, Footer } from '@/components'
import 'react-notion-x/src/styles.css'
// import { NotionRenderer } from 'react-notion-x'
import { Code } from 'react-notion-x/build/third-party/code'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { Equation } from 'react-notion-x/build/third-party/equation'
import { Modal } from 'react-notion-x/build/third-party/modal'
import { Pdf } from 'react-notion-x/build/third-party/pdf'
import { NotionAPI } from 'notion-client'
import Head from 'next/head';

const pageId = '3ff8b67a1e0c4611bd334a4612202906';
export async function getServerSideProps() {
  // Fetch Notion page data from the Notion API
  const notion = new NotionAPI()
  const pageData = await notion.getPage(pageId)
  return {
    props: {
      pageData,
    },
  };
}


const cybersec_resources = ({ pageData }) => {
  const NotionRenderer = dynamic(() => import('react-notion-x').then((mod) => mod.NotionRenderer), {
    ssr: false,
  });
  return (
    <>
      <Header selected={'Resources'} />
      <div>
      <Head>
      <title>NJACK | CyberSec Resources</title>
        <style>
          {`
            .notion-page{
              width: 100% !important;
            }
            .notion-page-no-cover{
              padding-top: 0px !important;
            }
            .notion-header{
              z-index: 0 !important;
            }
          `}
        </style>
      </Head>
      {pageData ? <NotionRenderer
        recordMap={pageData}
        fullPage={true}
        darkMode={false}
        components={{
          Code,
          Collection,
          Equation,
          Pdf,
          Modal
        }}
      /> : null}
      </div>
      <Footer />
    </>
  )
}

export default cybersec_resources


