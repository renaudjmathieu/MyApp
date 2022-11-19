import './styles.css';
import '../pages.css';
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
            <select
              onChange={(change) => setPollingInterval(Number(change.target.value))}
              title="Polling Interval"
            >
              <option value={0}>Off</option>
              <option value={1000}>1s</option>
              <option value={5000}>5s</option>
            </select>
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
