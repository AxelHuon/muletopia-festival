'use client';
import Link from "next/link";
import styled from 'styled-components';
import { Colors } from '@/theme/Colors';
import Image from "next/image";

const PageContent = styled.div`
  background-image: url('/images/background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  background-color: ${Colors.primaryColor};
  max-height: 100vh;
  overflow: hidden;
  position: relative;
`;

const EyeDot = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  pointer-events: none;
  z-index: 0;
`;

const FaceDot = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    pointer-events: none;
    z-index: 2;

`;

const EarDot = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    transform: translate(0, -100%);
    pointer-events: none;
    z-index: 2;
`;

const SvgContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 0;
`;

const TicketContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  width: calc(100% - 160px);
  height: calc(100% - 100px);
  margin: 50px 80px 0 80px;
  
`;

const Ticket = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 30%;
  height: 100%;
  z-index: 1;
  display: flex;
    flex-direction: column;
    justify-content: center;
  `;

const Ticket1 = styled(Ticket)`
  background-image: url('/images/ticket-1.svg');
  ${Ticket}
  
`;

const Ticket2 = styled(Ticket)`
  background-image: url('/images/ticket-2.svg');
  ${Ticket}
`;

const Ticket3 = styled(Ticket)`
  background-image: url('/images/ticket-3.svg');
  ${Ticket}
`;

const Title = styled.p`
    font-family: 'Tanker';
    font-size: 70px;
    font-style: normal;
    font-weight: 400;
    color: ${Colors.black};
    text-align: center;
    margin-top: 20px;
`;

const Date = styled.p`
    font-family: 'Tanker';
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.black};
    text-align: center;
`;

const Price = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  transform: rotate(${() => Math.floor(Math.random() * 41) - 20}deg);
  position: relative;
  img {
    position: absolute;
  }
  p {
    font-family: 'Tanker';
    font-size: 50px;
    font-weight: bold;
    color: ${Colors.gray300};
    text-align: center;
    z-index: 3;
  }
`;




export default function Ticketing() {
  return <main>
    <PageContent>
      <Link href="/">Return</Link>

      <SvgContainer>
        <EyeDot>
            <Image src='/images/eye-dot.png' alt='eye-dot' width={350} height={250}/>
        </EyeDot>
        <FaceDot>
            <Image src='/images/face-dot.png' alt='face-dot' width={350} height={250}/>
        </FaceDot>
        <EarDot>
            <Image src='/images/ear-dot.png' alt='ear-dot' width={250} height={250}/>
        </EarDot>
      </SvgContainer>

      <TicketContainer>
        <Ticket1>
          <Title>1 day
          </Title>
          <Date>
            Friday, saturday or sunday
          </Date>
          <Price>
            <Image src='/images/ticket-price.svg' alt='ear-dot' width={250} height={250}/>
            <p>35$</p>
          </Price>

        </Ticket1>

        <Ticket2>
          <Title>2 days
          </Title>
          <Date>
            Friday and saturday or saturday and sunday
          </Date>
          <Price>
            <Image src='/images/ticket-price.svg' alt='ear-dot' width={250} height={250}/>
            <p>50$</p>
          </Price>
        </Ticket2>
        <Ticket3>
          <Title> All days
          </Title>
          <Date>
            All days for you, man !
          </Date>
          <Price>
            <Image src='/images/ticket-price.svg' alt='ear-dot' width={250} height={250}/>
            <p>75$</p>
          </Price>
        </Ticket3>
      </TicketContainer>
    </PageContent>
  </main>;
}
