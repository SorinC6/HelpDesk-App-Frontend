import React, { useState } from "react";
import { Input, Button, Dropdown, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bg from "../assets/register.jpg";
import Flip from "react-reveal/Flip";
import theme from "../theme/styledTheme";

const Register = ({ registerUser, history }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const options = [
    { key: 1, text: "Student", value: 1 },
    { key: 2, text: "Helper", value: 2 },
    { key: 3, text: "Admin", value: 3 }
  ];

  const isFormEmpty = () => {
    if (email.length === 0 || username.length === 0 || password.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const formValid = () => {
    if (isFormEmpty()) {
      setError("Please fill all the fields");
    } else {
      setError(null);
      return true;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formValid()) {
      setError("");

      console.log({ email, username, password, role_id: 1 });
      registerUser({ email, username, password, role_id: 1 }).then(res => {
        debugger;
        console.log(res);
        if (res === 422) {
          return;
        } else if (res === 200) {
          history.push("/login");
        }
      });
    }
  };

  return (
    <RegisterScreen>
      <Flip left>
        <RegisterCard>
          {/* <Icon name="registered" size="huge" bordered style={{ margin: 10 }} /> */}

          <Form onSubmit={handleSubmit}>
            <h1>HelpDesk Register</h1>
            <InputWrapper
              icon="users"
              iconPosition="left"
              placeholder="username"
              onChange={e => setUsername(e.target.value)}
            />
            <InputWrapper
              icon="mail"
              iconPosition="left"
              placeholder="email"
              type="mail"
              onChange={e => setEmail(e.target.value)}
            />
            <InputWrapper
              icon="lock"
              iconPosition="left"
              placeholder="pasword"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <Dropdown
              button
              className="icon"
              floating
              labeled
              icon="world"
              selection
              options={options}
              onChange={e => setRole(e.target.textContent)}
              placeholder="your role"
            />
            <Button
              color="purple"
              size="small"
              style={{ width: 150 }}
              type="submit"
            >
              Register
            </Button>
            {error && (
              <Message error>
                <div>
                  <p>{error}</p>
                </div>
              </Message>
            )}
            <Message>
              Aleardy a user? <Link to="/login">Login</Link>
            </Message>
          </Form>
        </RegisterCard>
      </Flip>
      <Content>
        Students at lambda school need a place where they can escalate their
        concerns and receive help. This app allows an admin to manage help desk
        tickets that come in from Lambda School Students. It also allows
        students (A 2nd user type) to submit a help desk ticket, categorize it
        and post it to the help channel.
      </Content>
    </RegisterScreen>
  );
};

export default Register;

const RegisterScreen = styled.div`
  display: flex;
  position: relative;
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
  border: 10px solid ${theme.color.lightGreen};
  border-radius: 50%;
  background: ${theme.color.accentGreen};
  opacity: 0.6;
  box-shadow: ${theme.shadow.cardShadow};
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

const Content = styled.div`
  padding: 20px 40px;
  position: absolute;
  right: 5%;
  bottom: 7%;
  width: 300px;
  text-align: justify;
  text-shadow: ${theme.shadow.buttonShadow};
  color: ${theme.color.textColor};
  letter-spacing: 1px;
  line-height: 1.4;
`;
