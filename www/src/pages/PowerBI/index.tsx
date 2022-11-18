import './powerbi.css';
import '../pages.css';
import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let Logo = "https://powerapps.microsoft.com/images/application-logos/svg/powerbi.svg";

interface ReportProps {
  title: string;
  src: string;
  frameBorder: number;
  allowFullScreen: boolean;
}

const PowerBI = () => {

  const reports: ReportProps[] = [
    {
      title: "Test - Page 1",
      src: "https://app.powerbi.com/view?r=eyJrIjoiMTFiOWY5ODEtZmMzNi00NTJhLWE2Y2ItYThmYjVjNjQ1YjI4IiwidCI6IjEwMDMzY2FmLWZlYzAtNGRhMS1hZDdiLTcyY2ZhZTVlOTQwNiJ9",
      frameBorder: 0,
      allowFullScreen: true
    }
  ];

  return (
    <div className="main-wrapper">
      <header className="banner">
        <Container>
          <h1>Power BI</h1>
        </Container>
      </header>
      <main>
        {reports.map((report, index) => (
          <section className="features">
            <iframe className="iframe"
              title={report.title}
              src={report.src}
              frameBorder={report.frameBorder}
              allowFullScreen={report.allowFullScreen}
            />
          </section>
        ))}
      </main>
    </div>
  );
};

export default PowerBI;
