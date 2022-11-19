import './styles.css';
import '../styles.css';
import { useState } from "react";
import { Pokemon } from '../../components/Pokemon'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const pokemon = ['bulbasaur', 'charmander', 'squirtle', 'pikachu'];

const ReduxPage = () => {
  const [pollingInterval, setPollingInterval] = useState(0)

  return (
    <div className="main-wrapper">
      <header className="banner">
        <Container>
          <h1>Redux</h1>
        </Container>
      </header>
      <main>
        <Container>
          <section className="features">
            <Row>
              {pokemon.map((poke, index) => (
                <Pokemon key={index} name={poke} pollingInterval={pollingInterval} />
              ))}
            </Row>
          </section>
        </Container>
      </main>
    </div>
  );
};

export default ReduxPage;
