import * as React from 'react'
import Head from 'next/head'
import { NotionRenderer } from 'react-notion-x'
import { getPageTitle } from 'notion-utils'
import dynamic from 'next/dynamic'
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

        <title>NJACK | {title}</title>
        <style>
          {`
            .notion-frame{
              background-color: #282828;
              color: #ffffff;
            }
            .notion-header{
              z-index: 0 !important;
            }
            .notion-header .notion-nav-header{
              background-color: #282828;
              color: #ffffff;
            }
            .notion-header .breadcrumb .title{
              color: #ffffff;
            }
            svg{
              fill: wheat !important;
            }
            .notion-collection-column-title-body{
              color: wheat;
            }
            .notion-page-no-cover.notion-page-no-icon{
              margin-inline: 50px;
              width: 80% !important;
            }
            .notion .notion-code{
              background-color: #161616;
              border-radius: 10px;
            }
          `}
        </style>
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