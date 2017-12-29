import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { dataFetch, formValueChanged } from '../actions'
import { Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Redirect } from 'react-router-dom'

const FieldGroup = props => (
  <FormGroup>
    <FormControl {...props} />
  </FormGroup>
)

class LoginForm extends Component {
  render() {
    const { dataFetch, formValueChanged, login } = this.props
    if (login.logged.token) return <Redirect to={'/discussion'} />
    else
      return (
        <Row>
          <Col xs={12} sm={8} md={6} smOffset={2} mdOffset={3}>
            <fieldset>
              <h2>Please Sign In</h2>
              <hr />
              <FieldGroup
                type="text"
                bsSize="lg"
                name="email"
                placeholder="Email Address"
                onChange={e =>
                  formValueChanged({
                    name: e.target.name,
                    value: e.target.value
                  })
                }
              />
              <FieldGroup
                type="password"
                bsSize="lg"
                name="password"
                placeholder="Password"
                onChange={e =>
                  formValueChanged({
                    name: e.target.name,
                    value: e.target.value
                  })
                }
              />
              <hr />
              <Row>
                <Col xs={6} sm={6} md={6}>
                  <Button
                    type="submit"
                    block
                    bsSize="lg"
                    bsStyle="success"
                    onClick={() => {
                      dataFetch(login.form)
                    }}
                  >
                    Sign In
                  </Button>
                </Col>
                <Col xs={6} sm={6} md={6}>
                  <LinkContainer to="/register">
                    <Button block bsSize="lg" bsStyle="primary">
                      Register
                    </Button>
                  </LinkContainer>
                </Col>
              </Row>
            </fieldset>
          </Col>
        </Row>
      )
  }
}

const mapStateToProps = state => ({ login: state.login })
const mapDispatchToProps = dispatch =>
  bindActionCreators({ dataFetch, formValueChanged }, dispatch)

export { LoginForm }
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
