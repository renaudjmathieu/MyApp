import './styles.css';
import '../styles.css';
import Container from 'react-bootstrap/Container';

interface KaggleNotebookIFrame {
  title: string;
  src: string;
  frameBorder: number;
  scrolling: string;
}

const Kaggle = () => {

  const notebooks: KaggleNotebookIFrame[] = [
    {
      title: "Notebook 1",
      src: "https://www.kaggle.com/embed/renaudmathieu/notebook3773e1dbed?kernelSessionId=111435724",
      frameBorder: 0,
      scrolling: "auto"
    }
  ];

  return (
    <div className="main-wrapper">
      <header className="banner">
        <Container>
          <h1>Kaggle</h1>
        </Container>
      </header>
      <main>
        {notebooks.map((notebook, index) => (
          <section className="features">
            <div className="kaggleiframe-wrapper">
              <iframe className="kaggleiframe"
                title={notebook.title}
                src={notebook.src}
                frameBorder={notebook.frameBorder}
                scrolling={notebook.scrolling}
              />
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Kaggle;
