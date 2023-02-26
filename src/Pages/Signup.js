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
const Signup = () => {
  return (
    <Base>
      <Container>
        <Row style={{ marginTop: "10px" }} className="full-width">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader className="text-center">
                <h2>Signup Here</h2>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="name">Enter Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter here"
                    />
                  </FormGroup>

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

                  <FormGroup>
                    <Label for="about">Enter About</Label>
                    <Input
                      id="about"
                      type="textarea"
                      placeholder="Enter here"
                      style={{height:"110px"}}
                    />
                  </FormGroup>
                  <Container className="text-center">
                    <Button outline color="light">Register</Button>
                    <Button outline color="light" tag={ReactLink} to="/login" className="ml20" >Login</Button>
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

export default Signup;
