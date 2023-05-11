import React from 'react'
import {Header, Footer} from '@/components'
import Resources from '@/components/resourcePage/resources'
import data from './resource_data/devdata'

const dev_resources = () => {
  return (
    <>
        <Header selected={'Resources'} />
        <Resources data={data} />
        <Footer/>
    </>
  )
}

export default dev_resources
