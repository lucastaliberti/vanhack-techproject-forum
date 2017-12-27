import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { dataFetch } from './actions'

import DiscussionPanel from '../components/DiscussionPanel'

class Discussion extends Component {
  componentDidMount() {
    const { dataFetch } = this.props
    dataFetch()
  }

  render() {
    const { grouped } = this.props
    console.log(grouped)
    return (
      grouped.length > 0 &&
      grouped.map((v, i) => (
        <DiscussionPanel key={i} title={v.title}>
          {v.replies}
        </DiscussionPanel>
      ))
    )
  }
}

const mapStateToProps = state => ({ grouped: state.discussion.grouped })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ dataFetch }, dispatch)

export { Discussion }
export default connect(mapStateToProps, mapDispatchToProps)(Discussion)
