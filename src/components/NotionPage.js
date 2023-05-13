import * as React from 'react'
import Head from 'next/head'
import { NotionRenderer } from 'react-notion-x'
import { getPageTitle } from 'notion-utils'
import { Code } from 'react-notion-x/build/third-party/code'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { Equation } from 'react-notion-x/build/third-party/equation'
import { Modal } from 'react-notion-x/build/third-party/modal'
import { Pdf } from 'react-notion-x/build/third-party/pdf'

export const NotionPage = ({
  recordMap,
  rootPageId
}) => {
  if (!recordMap) {
    return null
  }

  const title = getPageTitle(recordMap)
//   console.log(title, recordMap)

  return (
    <>
      <Head>
        <meta name='description' content='React Notion X Minimal Demo' />

        <title>NJACK|{title}</title>
      </Head>

      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        rootPageId={rootPageId}
        components={{
            Code,
            Collection,
            Equation,
            Pdf,
            Modal
          }}
      />
    </>
  )
}