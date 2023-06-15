import React from 'react'
import 'react-notion-x/src/styles.css'
import ResourcesComponent from './resources_component';
import { NotionAPI } from 'notion-client'

const pageId = '59ca205b36174d0aa7c9e2d86a6680f8';
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
 
  return (
   <ResourcesComponent pageData={pageData} />
  )
}

export default cybersec_resources


