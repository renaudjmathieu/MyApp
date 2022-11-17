import './powerbi.css';
import '../pages.css';
import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let Logo = "https://powerapps.microsoft.com/images/application-logos/svg/powerbi.svg";

export default class PowerBI extends React.Component<{}> {
  render() {
    return (
      <div className="main-wrapper">
        <header className="banner">
          <Container>
            <h1>Power BI with Typescript</h1>
          </Container>
        </header>
        <main>
          <Container>
            <section className="features">
              <Row className="justify-content-md-center">
                <Col>
                  <div className="text-center">
                    <img height="250" src={Logo} title="logo" />
                  </div>
                </Col>
              </Row>
            </section>
          </Container>
        </main>
      </div>
    );
  }
}