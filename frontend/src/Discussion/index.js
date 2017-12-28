import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import { Label } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

import { dataFetch } from './actions'

import DiscussionPanel from '../components/DiscussionPanel'

class Discussion extends Component {
  componentDidMount() {
    const { dataFetch } = this.props
    dataFetch()
  }

  render() {
    const { grouped } = this.props
    return (
      grouped.length > 0 &&
      grouped.map((v, i) => (
        <DiscussionPanel key={i} title={v.title}>
          <p className="pull-left">
            <FontAwesome name="user-circle" size="2x" />
            <span className="pull-right">
              &nbsp;By <b>{v.author}</b> on{' '}
              {moment(v.createdAt).format('DD/MM/YYYY')}
            </span>
          </p>

          <p className="pull-right">
            Total replies: <Label>{v.replies}</Label>
          </p>
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
