'use client'

import styled from "styled-components";
import SearchImage from "../../../../public/search.svg";
import Image from "next/image";

const Container = styled("div")`
    position: relative;

    span {
        position: absolute;
        left: 15px;
        top: 5px
    }

    input {
        background-color: #FFF;
        color: #000;
        border: 0;
        width: 500px;
        heigth: 32px;
        display: flex;
        align-itens: center;
        padding: 8px 16px 8px 36px;
        border-radius: 16px;
        font-size: 12px;
        line-height: 16px;
        box-shadow: inset 0px 1px 3px 1px rgba(0, 0, 0, 0.25);

        &:focus {
            outline: none;
        }
    }
`

export const Search = () => {
    return (
        <Container>
            <span>
                <Image src={SearchImage} alt="Ícone de busca dos pokemons na Pokedex"/>
            </span>
            
            <input type="text" placeholder="Digite aqui o número do seu pokemon que deseja buscar..."></input>

        </Container>
    )
}

export default Search;