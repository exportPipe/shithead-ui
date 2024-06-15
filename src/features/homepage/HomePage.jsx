import React from 'react';
import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to Shithead</h1>
      <p>
        This is a simple homepage component demonstrating how to use Bootstrap
        with React. You can toggle between light and dark themes using the
        button below.
      </p>
    </Container>
  );
};

export default HomePage;
