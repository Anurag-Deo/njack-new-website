import * as React from 'react'

import 'react-notion-x/src/styles.css'
import { NotionPage } from '../components/NotionPage'
import { NotionAPI } from 'notion-client'

const notion = new NotionAPI()

export const getStaticProps = async (context) => {
  const pageId = (context.params.pageId) || rootNotionPageId
  const recordMap = await notion.getPage(pageId)

  return {
    props: {
      recordMap
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export default function Page({ recordMap }) {
  return <NotionPage recordMap={recordMap}  />
}