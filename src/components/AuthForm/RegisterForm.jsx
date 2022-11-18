import { Formik, Form, ErrorMessage } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { stepOneRegistSchema, stepTwoRegistSchema } from "schemas/authSchema";
import { Container, Text, Input, Button, LinkBox, Link, ErrorText } from "./LoginForm.styled";
import { toast } from "react-toastify";
import { useRegisterMutation } from "redux/auth/authApi";

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <ErrorText>{message}</ErrorText>} />;
};

export const RegisterForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    location: "",
    phone: "",
  });
  const [register, status] = useRegisterMutation();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = formData => {
    console.log(formData);

    const { email, password, name, location: address, phone } = formData;
    register({ email, password, name, address, phone })
      .unwrap()
      .then(payload => {
        console.log(`User successfully registered`);
        // navigate("/"); if success - navigate user to userPage
        navigate("/");
      })
      .catch(() => {
        console.log("Handle errors");
        toast.error("Sorry, such email already exists");
      });

    console.log(status);
  };

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));
    if (final) {
      makeRequest(newData);
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <StepOne
      next={handleNextStep}
      data={data}
      // errors={errors}
    />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  return (
    <>
      <Container>
        <Text>Registration</Text>
        {steps[currentStep]}
        <LinkBox>
          Already have an account? <Link to={"/login"}>Login</Link>
        </LinkBox>
      </Container>
    </>
  );
};

const StepOne = props => {
  const handleSubmit = values => {
    props.next(values);
  };
  return (
    <Formik initialValues={props.data} validationSchema={stepOneRegistSchema} onSubmit={handleSubmit}>
      {() => (
        <Form autoComplete="off">
          <label htmlFor="email">
            <Input type="email" name="email" id="email" placeholder="Email" />
            <FormError name="email" />
          </label>
          <label htmlFor="password">
            <Input type="password" name="password" id="password" placeholder="Password" />
            <FormError name="password" />
          </label>
          <label htmlFor="confirmPassword">
            <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" />
            <FormError name="confirmPassword" />
          </label>
          <Button type="submit">Next</Button>
        </Form>
      )}
    </Formik>
  );
};

const StepTwo = props => {
  const handleSubmit = (values, actions) => {
    props.next(values, true);
    actions.resetForm();
  };
  return (
    <Formik initialValues={props.data} validationSchema={stepTwoRegistSchema} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form autoComplete="off">
          <label htmlFor="name">
            <Input type="text" name="name" id="name" placeholder="Name" />
            <FormError name="name" />
          </label>
          <label htmlFor="location">
            <Input type="text" name="location" id="location" placeholder="City, region" />
            <FormError name="location" />
          </label>
          <label htmlFor="phone">
            <Input type="tel" name="phone" id="phone" placeholder="Mobile phone" />
            <FormError name="phone" />
          </label>
          <Button type="button" onClick={() => props.prev(values)}>
            Back
          </Button>
          <Button type="submit">Register</Button>
        </Form>
      )}
    </Formik>
  );
};