import React, { Fragment, FunctionComponent } from 'react'
import { Helmet } from 'vtex.render-runtime'

const Home: FunctionComponent = () => (
  <Fragment>
    <Helmet>
      <title>Index</title>
    </Helmet>
    <h1>Index</h1>
    <p>Text for privacy policy</p>
  </Fragment>
)

export default Home
