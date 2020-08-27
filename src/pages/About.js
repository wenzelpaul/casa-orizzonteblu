import React from 'react';
import { Table, Container } from 'react-bootstrap';

import { Jumbotron } from '../components/Jumbotron';

function About() {
    return (
        <>
            <Jumbotron />
            <Container fluid="xl">
                <h2>Beschreibung der Umgebung</h2>
                <p>
                    Casa Orizzonte Blu liegt oberhalb von Diano Marina/Diano San Pietro in Olivenhainen. <br />
Im 2 km entfernten Moltedo finden Sie alles für den täglichen Gebrauch und ein typisches Restaurant; in Diano San Pietro ebenso, dazu Apotheke, Post.<br />
Ausflugsmöglichkeiten ins Hinterland (auch zu Fuß) sind ebenso reizvoll wie Fahrten nach Genua (Altstadt, Aquarium, Museen), San Remo (Casino, Altstadt), Monaco (Casino, Hafen, Museen), Nizza (Altstadt, Museen) u.v.m.<br />
Die Küste bietet Strände aller Art und viele Freizeitmöglichkeiten.
</p>
                <h5>Wegbeschreibung</h5>
                <ul>
                    <li>Autobahn A 10 von Genua kommend Richtung Ventimiglia: Ausfahrt San Bartolomeo al Mare</li>
                    <li>Von der Autobahnausfahrt runter auf die Küstenstraße in San Bartolomeo al Mare.</li>
                    <li>An der Ampel-Kreuzung zur SS1 Aurelia rechts abbiegen Richtung West nach Diano Marina.</li>
                    <li>Nach 1,4 km kommt links eine Esso-Tankstelle und rechts ein rotes Haus. Dort scharf rechts abbiegen, über den Bahnübergang drüber und sofort hinter dem Bahnübergang links abbiegen an der Bahnlinie entlang Richtung Diano Marina.</li>
                    <li>Nach 700m, wo links eine niedrige Bahnunterführung ist knickt die Straße im rechten Winkel ins Hinterland am Flussbett entlang nach Diano San Pietro.</li>
                    <li>Man fährt unter der Autobahn durch und unter der neu gebauten Eisenbahntrasse und erreicht nach 2,5 km die Ortsmitte von Diano San Pietro</li>
                    <li>Einfach geradeaus weiter – jetzt auf den Tachostand achten – und nach 1,4 km ist links am Straßenrand eine kleine Kapelle mit Spiegel, gegenüber geht es steil hoch nach Moltedo (am Berg, Ferienhaussiedlung und Kirche). Nach 250m. bei den Mülltonnen links und nach 150m Einfahrt in die Olivenhaine.</li>
                    <li>Dieser schmalen, aber geteerten, Straße folgen. Sie geht den Berg hoch , oben am Kamm links entlang bis nach 1,6km eine Kreuzung (nach rotweißen Wasserbetonbecken) mit Wasserhähnen (Beschriftung Marin d` Ca) kommt. Dort rechts abbiegen und nach 550m liegt rechts unser gelbes Haus. Parkmöglichkeiten direkt am Grundstück vorhanden.</li>
                    <li>GPS Koordinaten für Navis: N 43° 56` 50``; E 8° 03` 53``</li>
                </ul>
                <h5>Freizeitmöglichkeiten</h5>
                <p>Angeln, Bootstouren, Bowling, Freizeitbad, Kegeln, Klettern, Minigolf, Mountainbiken, Radfahren, Reiten, Schwimmen, Segeln, Sightseeing, Surfen, Tauchen, Tennis, Wandern, Wasserski <br />
Zusätzlich
Walbeobachtung; Etwas entfernt: Skifahren, Snowboarden, Klettern, Paragleiten, Hochseeangelfahrten, Golf, Spielbank, etc.
Urlaubsideen
Unterkunft mit Meerblick, Alleinlage - Ruhe
</p>
                <h5>Aufteilung des Ferienhauses</h5>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Personen</th>
                            <th>Zimmer</th>
                            <th>Ausstattung</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>max. 10</td>
                            <td>3 Schlafzimmer</td>
                            <td>Kaminofen</td>
                        </tr>
                        <tr>
                            <td />
                            <td>1 Galerie mit zwei Schlafplätzen</td>
                            <td>Spülmaschine</td>
                        </tr>
                        <tr>
                            <td />
                            <td>1 Wohn-/Essraum mit Küchenzeile</td>
                            <td>Waschmaschine</td>
                        </tr>
                        <tr>
                            <td />
                            <td>2 Badezimmer</td>
                            <td>2 x HIFI-Anlagen mit Radio / CD- Player / I-Pod-Anschluß</td>
                        </tr>
                        <tr>
                            <td />
                            <td>1 Terrasse mit Meerblick und Swimmingpool</td>
                            <td />
                        </tr>
                    </tbody>
                </Table>
                <h5>Preise je Woche (für eine Belegung bis zu 5 Personen)</h5>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Zeitraum</th>
                            <th>Tag</th>
                            <th>Woche</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Juli & August</td>
                            <td>150 €</td>
                            <td>1000 €</td>
                        </tr>
                        <tr>
                            <td>Mai & Juni & September & Oktober</td>
                            <td>120 €</td>
                            <td>800€</td>
                        </tr>
                        <tr>
                            <td>Übriger Zeitraum</td>
                            <td>90 €</td>
                            <td>600 €</td>
                        </tr>
                    </tbody>
                </Table>
                <p>
                    Jede weitere Person 5 € / Tag <br />
                    Sonderpreise für Belegung bis zu 2 Personen: 10% Ermäßigung
                </p>
            </Container>
        </>
    );
}

export default About;
