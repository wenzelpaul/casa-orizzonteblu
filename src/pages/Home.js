import React from 'react';
import { Container } from 'react-bootstrap';

import { Jumbotron } from '../components/Jumbotron';

function Home() {
  return (
    <>
      <Jumbotron />
      <Container fluid="xl">
        <h2>Beschreibung des Ferienhauses</h2>
        <p>Das Casa Orizzonte blu liegt inmitten von Olivenhainen mit herrlichem Blick auf das 3,5 km (Luftlinie) entfernte Meer und die umgebenden Hügel. Ein Ort für Menschen, die Ruhe und Natur lieben; trotzdem ist man in wenigen Minuten an der lebendigen Küste, in weniger als einer Stunde in San Remo oder Monaco. Zufahrtstrasse (2,3km) asphaltiert.</p>
      </Container>
    </>
  );
}

export default Home;
