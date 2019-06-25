import React, { useState } from "react";
import { Input, Segment, Icon, Button, Dropdown } from "semantic-ui-react";
import styled from "styled-components";
import bg from "../assets/register.jpg";
import Flip from "react-reveal/Flip";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const dropDownOption = () => {
    return [
      {
        key: "user",
        text: (
          <span>
            <strong>Student</strong>
          </span>
        )
      },
      {
        key: "avatar",
        text: <span>Helper</span>
      },
      {
        key: "signout",
        text: <span>Admin</span>
      }
    ];
  };
  return (
    <RegisterScreen>
      <Flip left>
        <RegisterCard>
          {/* <Icon name="registered" size="huge" bordered style={{ margin: 10 }} /> */}
          <Form>
            <InputWrapper
              icon="users"
              iconPosition="left"
              placeholder="username"
            />
            <InputWrapper
              icon="mail"
              iconPosition="left"
              placeholder="email"
              type="mail"
            />
            <InputWrapper
              icon="lock"
              iconPosition="left"
              placeholder="pasword"
              type="password"
            />
            <Dropdown
              button
              className="icon"
              floating
              labeled
              icon="world"
              search
              text="Select Role"
              options={dropDownOption()}
            />
            <Button color="purple" size="small" style={{ width: 150 }}>
              Register
            </Button>
          </Form>
        </RegisterCard>
      </Flip>
    </RegisterScreen>
  );
};

export default Register;

const RegisterScreen = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const RegisterCard = styled.div`
  height: 600px;
  width: 600px;
  border: 1px solid blue;
  border-radius: 50%;
  background: green;
  opacity: 0.6;
`;
const Form = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const InputWrapper = styled(Input)`
  width: 300px;
`;
