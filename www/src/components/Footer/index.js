import React from "react";
import './styles.module.css';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer class="py-5">
        <Container>
          <p class="m-0 text-center">
            © Renaud Mathieu, Montreal Canada
          </p>
        </Container>
    </footer>
  );
}

export default Footer;
