import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;
`
export const Wrapper = styled.div`
    display: ${({top}) => top ? "flex" : "grid"};
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
`

export const MovieDetail = styled.div`
    position: relative;
    cursor: pointer;
`

export const Title = styled.h2`
    color: white;
    font-size: 2.5rem;
`
export const SmallTitle = styled.h4`
    color: gray;
    font-size: 1.3rem;
`

export const MovieTitle = styled.h2`
    font-size: 26px;
    font-weight: 500;
`

export const MovieYear = styled.span`
    color: black;
    font-size: 16px;
    margin-top: -10px;
`

export const Image = styled.img`
    width: ${({small}) => small ? "100%" : "100%"};
    height: 350px;
    border-radius: 7px;
    object-fit: "cover";
`

export const InfoWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    position: absolute;
    background-color: rgba(100, 100, 100, 0.3);
    backdrop-filter: blur(10px);
    bottom: 5px;
`

export const InfoDetail = styled.div`
    display: flex;
    flex-direction: column;
`

export const InfoAction = styled.div`
    display: flex;
    gap: 0 20px;
`

export const Button = styled.button`
    border: none;
    border-radius: 10px;
    background-color: red;
    color: white;
    padding: 5px 10px;
`

export const More = styled.div`
    display: flex;
    gap: 0 15px;
    align-items: center;
`