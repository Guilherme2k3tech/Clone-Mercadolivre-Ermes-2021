import React from 'react';

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';

import tshirtImage from "../../assets/tshirt.png"

import SellerInfo from '../SellerInfo';


const product: React.FC = () => {

  return (

    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>



      <Panel>
        <Column>
          <Gallery>
            <img alt='T-Shirt' src={tshirtImage} />;
          </Gallery>

          <Info />

        </Column>


        <Column>

          {/*   <PoductAction/>*/}


          <WarrantySection />
          <SellerInfo/> 

          

          
        </Column>

      </Panel>
    </Container>

  );

};


const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra Garantida e Segura com Lorem Ipsum</p>
        <br/>

        <p className="description">Receba o seu produto, ou devolvemos seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantia do vendedor:</p>
        <br/>
        <p className="description">Sem garantia</p>
      </span>
    </div>
    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec pretium ante. Etiam tincidunt velit quis lorem ornare maximus. Vivamus est ex, faucibus in risus id, pretium consectetur nibh. Sed sit amet urna a nibh tincidunt rhoncus. Etiam pulvinar lorem arcu, at accumsan justo feugiat nec. Nullam lobortis nec ligula quis mollis. In hac habitasse platea dictumst. Aenean luctus enim urna, in faucibus turpis placerat non. Sed laoreet felis quis neque tempor ornare. Praesent iaculis aliquet ipsum, id ultricies enim. Nunc pretium feugiat consequat. Sed posuere mi odio, sed auctor urna semper sit amet. Vivamus eu ultricies eros. Morbi sed mollis neque, quis sagittis elit.
    </p>

    <br />
    <br />

    <p>itens inclusos:</p>
    <br/>   


    <p>
    - 1x LED  <br />
    - 1x LED  <br />
    - 1x LED  <br />
    - 1x LED  <br />
    - 1x LED  <br />
    </p>
    
    <br />
    <p>
    Sed ac orci egestas, dignissim orci id, elementum dolor. Sed id urna non neque ullamcorper suscipit auctor vel orci. Aliquam at sem arcu. Morbi congue risus et nulla maximus ultrices
    </p>

  </Description>
)
 









export default product;
