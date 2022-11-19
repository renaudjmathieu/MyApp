import './styles.css';
import '../styles.css';
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
            {data.split('/n').map((item, i) =>
              <svg className='featureSvg' width="100%" height="100%" role="img">
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="24" fill='#123456'>{item}</text>
              </svg>)}
          </section>
        </Container>
      </main>
    </div>
  );
};

export default AzureFunctions;
