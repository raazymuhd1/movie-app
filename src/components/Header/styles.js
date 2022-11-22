import styled from "styled-components";

export const Container = styled.div`
    min-height: 65px;
    max-height: 125px;
    display: flex;
    position: sticky;
    justify-content: space-between;
    padding: 10px;
    background-color: black;
    top: 0;
    z-index: 1;
    color: ${({ active }) => active ? "white" : "gray"};
    border-bottom: .5px solid #333;
`

export const Wrapper = styled.div`
   padding: 10px;
`

export const MenuList  = styled.ul`
   display: flex;
   gap: 0 35px;
`

export const MenuItem  = styled.li`
   list-style: none;
   font-weight: ${({active}) => active ? 600 : 500};
   color: ${({active}) => active ? "white" : 'gray'};
   cursor: pointer;
   transition: all 500ms ease-in-out;
   font-size: ${({right}) => right ? "1.3rem" : "1.2rem"};

   &:hover { 
      color: white;
   }
`