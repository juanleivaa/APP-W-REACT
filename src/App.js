


// STYLES 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//COMPONENTS
import Header from './shared/header/header';
import Footer from './shared/footer/footer';
import Aside from './shared/aside/aside';

//IMPORT ELEMENTOS DE BOOTSTRAP
import { Button, Container, Row , Col } from 'react-bootstrap';
import React, { Fragment } from 'react';


function App() {
  return (
    <Fragment>
      <Header/>
        <Container fluid="lg">
          <Row>



              <Col xs={12} lg={9} >
                <main>
                    <section>
                      <Button>BOTON DE BOOTSTRAP</Button>
                      <h1>Hola mundo</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non diam eu tortor rutrum consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer vel nulla non justo ullamcorper tempor sed in erat. Sed fringilla vitae lacus a tristique. Duis vel orci ut metus elementum fermentum. Nam semper massa ac velit accumsan, a vestibulum mi dapibus. Aenean in ex sed ante congue consequat. Vivamus auctor, metus id ultricies lacinia, lorem risus pretium sapien, a rhoncus lacus quam nec libero. Duis et metus ac justo tincidunt aliquet sit amet id libero. Vivamus nec metus in leo scelerisque ultrices. Aliquam vitae lorem vel eros fermentum rhoncus. Ut tincidunt massa id feugiat ultricies. Maecenas ac mauris id orci egestas tristique. Sed blandit, sem sit amet tempor tristique, libero tortor luctus sem, id lobortis justo libero nec lorem. Curabitur rutrum tellus ac sapien varius, a hendrerit turpis facilisis. </p>
                    </section>
                </main>
              </Col>

              

              <Col xs={12} lg={3} >
                <Aside />
              </Col>



          </Row>
        </Container>
      <Footer/>
    </Fragment>

  );
}

export default App;
 