import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'

export default class APP extends Component {
  render() {
    return (
      <Layout>
        <Quiz />
      </Layout>
    );
  }
}
