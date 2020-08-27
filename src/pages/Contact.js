import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

function Contact() {
  return (
    <Container>
      <br />
      <Card>
        <Card.Body>
          <Card.Title>Kontakt</Card.Title>
          <Card.Text>
            Schreiben Sie uns einfach eine E-Mail!
      </Card.Text>
          <Button href="mailto:Margrit.Hohenberger@buchet8.de" variant="primary">Per E-Mail anfragen</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Contact;
