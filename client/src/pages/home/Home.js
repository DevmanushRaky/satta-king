import React from 'react'
import "./Home.css"
import Helmet from '../../components/helmet/Helmet'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import LiveChart from "../live/LiveChart"
  ;
import Livetable from '../live/Livetable';
import LiveResult from '../live/LiveResult';


function Home() {
  // Function to open WhatsApp with the provided phone number
  const handleWhatsApp = (phoneNumber) => {
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, '_blank');
  };

  // Function to initiate a call with the provided phone number
  const handleCall = (phoneNumber) => {
    const telLink = `tel:${phoneNumber}`;
    window.open(telLink);
  };


  return <Helmet title={"Home"}>
    <>

      {/*  Live chart  */}
      <LiveChart />

      {/* Number Board */}
      <div className='m-2 p-2'>
        <Container>
          <Row>
            <Col xs={12} md={4} lg={3}>
              <Card className='common-card' >
                <Card.Body>
                  <Card.Title> RUBY SAXENA (CEO) </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">7033477294</Card.Subtitle>
                  <Card.Text>
                    {/* SATTA KING Gali, Desawar, India Bazaar, Gaziyabad jaisi sabhi satta king game ki milegi leak jodi. Hamari 100% leak jodi rojana pass hoti h. Agr app bhi leak game lena chahte h to abhi whatsapp karen. */}
                  </Card.Text>
                  <Button variant="primary" className="ms-2" onClick={() => handleCall('7033477294')}>
                    Call Now
                  </Button>
                  <Button variant="success" className="ms-2 m-2" onClick={() => handleWhatsApp('7033477294')}>
                    Whatsapp
                  </Button>

                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} lg={3}>
              <Card className='common-card'>
                <Card.Body>
                  <Card.Title>AROHI SAXENA (CEO) </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">9680947336</Card.Subtitle>
                  <Card.Text>
                    {/* Apko satta king fix number milega, Jo 101% pass hoga. Agr app bhi leak game lena chahte h to ahhi whatsapp pr contact karen. */}
                  </Card.Text>
                  <Button variant="primary" className="ms-2 " onClick={() => handleCall('9680947336')}>
                    Call  Now
                  </Button>
                  <Button variant="success" className="ms-2  m-2" onClick={() => handleWhatsApp('9680947336')}>
                    Whatsapp
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} lg={3} >
              <Card className='common-card'>
                <Card.Body>
                  <Card.Title> PRACHI SINGH (CEO) </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">8144866274</Card.Subtitle>
                  <Card.Text>
                    {/* Ab hoga satta king leak game ka dhamaka. Hum apko denge leak game 4 ghante pehle. To baniye hamare khas member aur jitye lakho rupey. Agr app bhi satta king leak game chahte h to abhi whatsapp pr hamse contact karen. */}
                  </Card.Text>
                  <Button variant="primary" className="ms-2 " onClick={() => handleCall('8144866274')}>
                    Call  Now
                  </Button>
                  <Button variant="success" className="ms-2  m-2" onClick={() => handleWhatsApp('8144866274')}>
                    Whatsapp
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} lg={3}>
              <Card className='common-card'>
                <Card.Body>
                  <Card.Title> JYOTI AGARWAL (CEO) </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">6307157095</Card.Subtitle>
                  <Card.Text>
                    {/* Gali, Desawar, Gaziyabad, Faridabad, India bazar - In sabhi satta king game ke liye apko leak number advance me milega. App us number ko lgakar lakho rupay kama sakte h. Hamari company se direct leak game hoti h jo 100% pass hoga. Abhi game lene ke liye whatsapp par contact karen. */}
                  </Card.Text>
                  <Button variant="primary" className="ms-2 " onClick={() => handleCall('6307157095')}>
                    Call  Now
                  </Button>
                  <Button variant="success" className="ms-2  m-2" onClick={() => handleWhatsApp('6307157095')}>
                    Whatsapp
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>


          <Row>
            <Col xs={12} md={4} lg={3}>
              <Card className='common-card' >
                <Card.Body>
                  <Card.Title> AMAR PAL SINGH (MD)</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">7464941778</Card.Subtitle>
                  <Card.Text>
                    {/* SATTA KING Gali, Desawar, India Bazaar, Gaziyabad jaisi sabhi satta king game ki milegi leak jodi. Hamari 100% leak jodi rojana pass hoti h. Agr app bhi leak game lena chahte h to abhi whatsapp karen. */}
                  </Card.Text>
                  <Button variant="primary" className="ms-2 " onClick={() => handleCall('7464941778')}>
                    Call  Now
                  </Button>
                  <Button variant="success" className="ms-2  m-2" onClick={() => handleWhatsApp('7464941778')}>
                    Whatsapp
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} lg={3}>
              <Card className='common-card'>
                <Card.Body>
                  <Card.Title> ANKITA YADAV (MD)  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">8689837533</Card.Subtitle>
                  <Card.Text>
                    {/* Apko satta king fix number milega, Jo 101% pass hoga. Agr app bhi leak game lena chahte h to ahhi whatsapp pr contact karen. */}
                  </Card.Text>
                  <Button variant="primary" className="ms-2 " onClick={() => handleCall('8689837533')}>
                    Call  Now
                  </Button>
                  <Button variant="success" className="ms-2  m-2" onClick={() => handleWhatsApp('8689837533')}>
                    Whatsapp
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} lg={3} >
              <Card className='common-card'>
                <Card.Body>
                  <Card.Title>BALRAJ SINGH (MD) </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">9001391240</Card.Subtitle>
                  <Card.Text>
                    {/* Ab hoga satta king leak game ka dhamaka. Hum apko denge leak game 4 ghante pehle. To baniye hamare khas member aur jitye lakho rupey. Agr app bhi satta king leak game chahte h to abhi whatsapp pr hamse contact karen. */}
                  </Card.Text>
                  <Button variant="primary" className="ms-2 " onClick={() => handleCall('9001391240')}>
                    Call  Now
                  </Button>
                  <Button variant="success" className="ms-2  m-2" onClick={() => handleWhatsApp('9001391240')}>
                    Whatsapp
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4} lg={3}>
              <Card className='common-card'>
                <Card.Body>
                  <Card.Title> GUNJAN THAKUR </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">7983375064</Card.Subtitle>
                  <Card.Text>
                    {/* Gali, Desawar, Gaziyabad, Faridabad, India bazar - In sabhi satta king game ke liye apko leak number advance me milega. App us number ko lgakar lakho rupay kama sakte h. Hamari company se direct leak game hoti h jo 100% pass hoga. Abhi game lene ke liye whatsapp par contact karen. */}
                  </Card.Text>
                  <Button variant="primary" className="ms-2 " onClick={() => handleCall('7983375064')}>
                    Call  Now
                  </Button>
                  <Button variant="success" className="ms-2  m-2" onClick={() => handleWhatsApp('7983375064')}>
                    Whatsapp
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>


      {/* Live Table   */}
      <Livetable />

      {/* Live Result  */}
      <LiveResult/>

    </>
  </Helmet>
}

export default Home