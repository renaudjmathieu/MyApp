import './styles.css';
import '../pages.css';
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';

const AzureFunctions = () => {

  const [data, setData] = useState('');
  useEffect(() => {
    (async function () {
      const { text } = await (await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return (
    <div className="main-wrapper">
      <header className="banner">
        <Container>
          <h1>Azure Functions</h1>
        </Container>
      </header>
      <main>
        <Container>
          <section className="features">
            <p>
              {data.split('/n').map((item, i) => <span key={i}>{item}<br /></span>)}
            </p>
          </section>
        </Container>
      </main>
    </div>
  );
};

export default AzureFunctions;
