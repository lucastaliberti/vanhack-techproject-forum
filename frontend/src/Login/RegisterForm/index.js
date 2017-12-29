import React from 'react'
import { Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const FieldGroup = props => (
  <FormGroup>
    <FormControl {...props} />
  </FormGroup>
)

const RegisterForm = () => (
  <Row>
    <Col xs={12} sm={8} md={6} smOffset={2} mdOffset={3}>
      <fieldset>
        <h2>Register Form</h2>
        <hr />
        <FieldGroup
          type="text"
          bsSize="lg"
          name="login"
          placeholder="Email Address"
        />
        <FieldGroup
          type="password"
          bsSize="lg"
          name="password"
          placeholder="Password"
        />
        <hr />
        <Row>
          <Col xs={6} sm={6} md={6}>
            <Button type="submit" block bsSize="lg" bsStyle="success">
              Sign In
            </Button>
          </Col>
          <Col xs={6} sm={6} md={6}>
            <LinkContainer to="/user/register">
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

export default RegisterForm
