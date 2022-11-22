import styled from "styled-components";

export const Container = styled.div`
    padding: 15px 15px 35px 15px;
    color: white;
    height: fit-content;
    border-left: 1px solid #333;
    background: black;
    position: sticky;
    top: 0;
    bottom: 5px;
`

export const Title = styled.h2`
    font-size: 20px;
    color: white;
    font-weight: 500;
`

export const Spacing = styled.hr`
    border: .5px solid gray;
    width: 100%;
`

export const AccountDetail = styled.div`
    padding: 10px 20px 10px 0px;
    display: flex;
    gap: 10px;
    align-items: center;
`

export const AccountInfo = styled.div`
    
`
export const AccountName = styled.h3`
    font-size: 12px;
    font-weight: 500;
`
export const AccountEmail = styled.h4`
    font-size: 10px;
    color: gray;
    margin-top: -8px;
`

export const MediaServices = styled.div`
    
`

export const MediaDetail = styled.div`
    display: flex;
    align-items: center;
    gap: 5px 10px;
`

export const MediaName = styled.h2`
    font-size: 16px;
`

export const MediaImage = styled.img`
    border-radius: 50%;
    height: 40px;
    width: 40px;
`

export const Genres = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 100px);
    gap: 10px;
`

export const GenreDetail = styled.div`
`

export const GenreTitle = styled.h3`
    color: white;
    font-size: 16px;
`