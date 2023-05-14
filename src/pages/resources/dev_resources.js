import React from 'react'
import dynamic from 'next/dynamic'
import { Header, Footer } from '@/components'
import { NotionAPI } from 'notion-client'
import Head from 'next/head';
import 'react-notion-x/src/styles.css'
const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
)
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
)
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)
const Pdf = dynamic(
  () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
  {
    ssr: false
  }
)
const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
  {
    ssr: false
  }
)


const pageId = '0aae496d07034e838d48d0b5fee0d449';
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


const dev_resources = ({ pageData }) => {
  const NotionRenderer = dynamic(() => import('react-notion-x').then((mod) => mod.NotionRenderer), {
    ssr: false,
  });
  return (
    <>
      <Header selected={'Resources'} />
      <div>
      <Head>
        <title>NJACK | Dev Resources</title>
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

export default dev_resources


