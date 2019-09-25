import React from 'react'
import {Card, Icon, Image,  } from 'semantic-ui-react'
import Destination from '../SugetionData';
import styled from 'styled-components';

function SuggestionCards() {
    return (
        <>
            <ContainerStyles>   
                { Destination.map( places => <Card key={places.name}>
                    {console.log(places)}
                    <Image  src ={`${places.img}`}/>
                    <Card.Content>
                        <Card.Header>
                        {places.name}
                        </Card.Header>
                        <Card.Description>
                            {places.description}
                        </Card.Description>
                    </Card.Content>
                </Card>) }
            </ContainerStyles>
        </>
    )
}

export default SuggestionCards
const ContainerStyles = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 5px 15px;
    .card{
        width: 30%;
        margin: 15px 0px;
        box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    }
    .header{
        font-size: 1.5rem;
        font-weight: bolder;
    }
    .description{
        text-align: center;
        padding:15px;
    }
    img{
        width: 100%;
    }
`;