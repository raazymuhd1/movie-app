import styled from "styled-components";

export const Container = styled.div`
`
export const Wrapper = styled.div`
    display: ${({top}) => top ? "flex" : "grid"};
    grid-template-columns: repeat(5, 1fr);
    justify-content: space-between;
    gap: 10px;
    align-items: center;
`

export const Title = styled.h2`
    color: white;
    font-size: 2.5rem;
`

export const MovieDetail = styled.div`
    position: relative;
`

export const Info = styled.div`
    position: absolute;
    bottom: 5px;
`

export const MovieTitle = styled.h2`
    font-size: 18px;
    font-weight: 600;
    color: white;
    text-shadow: 2px 2px 5px black;
`

export const Image = styled.img`
    height: 250px;
    cursor: pointer;
    transition: all 800ms ease-in-out;
    position: relative;

    &:after {
        content: 'okay';
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: black;
        top: 0;
        bottom: 0;
    }

    &:hover {
        transform: scale(1.1);
    }
`

export const MovieYear = styled.h4`
    margin-top: -10px;
    color: white;
`

export const SmallTitle = styled.h4`
    color: gray;
    font-size: 1.3rem;
`

export const More = styled.div`
    display: flex;
    gap: 0 15px;
    align-items: center;
`