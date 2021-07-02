import { Container,
   Condition, 
   Row, 
   HeartIcon,
   DispatchTag, 
   PriceCard, 
   PriceRow, 
   InstallmentsInfo,
   StockStatus,
   MethodCard,
   CheckIcon,
   Actions,
   Benefits,
   ShieldIcon,
  Button} from './styles';



const ProductAction: React.FC = () => {
  return (
    <Container>

      <Condition>2400 produtos vendidos</Condition>

    <Row>
      <h1>Gaming PC Core i9-9900k, RTX 3060, 32Gb RAM DDR4 3600mhz.</h1>
      <HeartIcon/>
    </Row>

    <DispatchTag>Enviando Normalmente</DispatchTag>

    <PriceCard>
      <PriceRow>
        <span className="symbol">R$</span>
        <span className="fraction">27,00,00</span>
        <span className="cents"> </span>
        </PriceRow>


      <InstallmentsInfo>em  15x  de  1,800 R$</InstallmentsInfo>

    </PriceCard>

      <StockStatus>Estoque disponível</StockStatus>

      <MethodCard>
        <CheckIcon/>

        <div>
        <span className="title">Frete Grátis</span>
        <span className="details">Benefício Lorem</span>
        <a href="#" className="more">Ver mais opções</a>
        </div>
        </MethodCard>

        <Actions>
          <Button solid>Comprar agora</Button>
          <Button>Adicionar ao carrinho</Button>
        </Actions>


      <Benefits>
        <li>
          <ShieldIcon/>
            <p>
              Receba seu produto, ou devolvemos seu dinheiro
            </p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
