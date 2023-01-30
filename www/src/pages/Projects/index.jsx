import React from "react";
import styles from './styles.module.css';
import '../styles.css';
import clsx from 'clsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Projects() {
  return (
    <div class="main-wrapper">
      <header className="banner">
        <Container>
          <h1>Projects</h1>
        </Container>
      </header>
      <main>
        <Container>
          <section className={styles.features}>
            <Row>
              <Col lg={12} ><Card style={{ width: '24rem' }}>
                <Card.Body>
                  <Card.Title>Data Visualization with D3 and React</Card.Title>
                  <Card.Img variant="top" className="project-image" src="https://raw.githubusercontent.com/renaudjmathieu/my-web-app/main/www/src/img/project1.png" />
                  <Card.Text>
                    A dynamic and configurable data dashboard web app built with D3 + React.
                  </Card.Text>
                  <Card.Link className="dumbLink" href="https://red-dune-0c424950f.2.azurestaticapps.net/" target="_blank">Demo</Card.Link>
                  <Card.Link className="dumbLink" href="https://github.com/renaudjmathieu/data-visualization-d3-react" target="_blank">GitHub</Card.Link>
                </Card.Body>
              </Card></Col>
            </Row>
          </section>
        </Container>
      </main>
    </div>
  );
}

export default Projects;
