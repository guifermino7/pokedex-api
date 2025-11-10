'use client'

import styled from 'styled-components';

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    padding: 4px 16px 16px 16px;
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
    width: 230px;
    height: 230px;
    border-radius: 8px;
`

const Card = () => {
    return (
        <Container>
            <p>Card</p>
        </Container>
    );
}

export default Card;