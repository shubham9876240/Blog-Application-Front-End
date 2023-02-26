import { NavLink as ReactLink } from "react-router-dom";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
  } from "reactstrap";

import Base from "../Components/Base";
const Login = () => {
    return (
        <Base>
          <Container>
            <Row style={{ marginTop: "10px" }} className="full-width">
              <Col sm={{ size: 6, offset: 3 }}>
                <Card color="dark" inverse>
                  <CardHeader className="text-center">
                    <h2>Login Here!</h2>
                  </CardHeader>
                  <CardBody>
                    <Form>
                          
                      <FormGroup>
                        <Label for="name">Enter Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter here"
                        />
                      </FormGroup>
    
                      <FormGroup>
                        <Label for="password">Enter Password</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter here"
                        />
                      </FormGroup>
    
                      <Container className="text-center">
                        <Button outline color="light">Login</Button>
                        <Button outline color="light" className="ml20" tag={ReactLink} to="/signup" >SignUp</Button>
                      </Container>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </Base>
      );
};

export default Login;
