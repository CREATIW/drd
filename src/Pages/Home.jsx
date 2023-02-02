import React from 'react'
import Page from '../page/Page'
import { Banner, ProductListSlider } from '../components';
function Home() {
  return (
    <Page>
      <Banner/>
      <ProductListSlider/>
    </Page>
  )
}

export default Home