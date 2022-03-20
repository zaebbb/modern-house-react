import React from 'react'
import styled from 'styled-components';
import { Button } from './Button';
import { InfoData, InfoDataTwo, InfoDataThree } from './../data/InfoData';

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
`

const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media (max-width: 768px){
        grid-template-columns: 1fr;
    }
`

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? "2" : "1")};

    h1{
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }
    p{
        margin-bottom: 2rem;
    }
`

const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? "1" : "2")};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px){
        order: ${({reverse}) => (reverse ? "2" : "1")};
    }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        @media (max-width: 768px){
            width: 90%;
            height: 90%;
        }
`

const InfoSection = () => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{InfoData.heading}</h1>
                    <p>{InfoData.paragraphOne}</p>
                    <p>{InfoData.paragraphTwo}</p>
                    <Button
                    to="/homes"
                    primary="true"
                    >
                    Перейти на страницу
                    </Button>
                </ColumnLeft>
                <ColumnRight reverse={InfoData.reverse}>
                <img src={InfoData.image} alt="home" />
                </ColumnRight>
            </Container>
        </Section>
        
    )
}

const InfoSectionTwo = () => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{InfoDataTwo.heading}</h1>
                    <p>{InfoDataTwo.paragraphOne}</p>
                    <p>{InfoDataTwo.paragraphTwo}</p>
                    <Button
                    to="/homes"
                    primary="true"
                    >
                    Перейти на страницу
                    </Button>
                </ColumnLeft>
                <ColumnRight reverse={InfoDataTwo.reverse}>
                <img src={InfoDataTwo.image} alt="home" />
                </ColumnRight>
            </Container>
        </Section>
        
    )
}

const InfoSectionThree = () => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{InfoDataThree.heading}</h1>
                    <p>{InfoDataThree.paragraphOne}</p>
                    <p>{InfoDataThree.paragraphTwo}</p>
                    <Button
                    to="/homes"
                    primary="true"
                    >
                    Перейти на страницу
                    </Button>
                </ColumnLeft>
                <ColumnRight reverse={InfoDataThree.reverse}>
                <img src={InfoDataThree.image} alt="home" />
                </ColumnRight>
            </Container>
        </Section>
        
    )
}

export default InfoSection;
