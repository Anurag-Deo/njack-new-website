import React from 'react'
import 'react-notion-x/src/styles.css'
// import { NotionRenderer } from 'react-notion-x'
import { NotionAPI } from 'notion-client'
import ResourcesComponent from './resources_component';

const pageId = 'a1e6cd22c5924c268eac02de0531d52e';
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


const cp = ({ pageData }) => {
  
  return (
    <ResourcesComponent pageData={pageData} />
  )
}

export default cp


