import styled from "styled-components"

export const SidebarWrapper = styled.div`
   position: sticky;
   height: ${({showMenu}) => showMenu ? "fit-content" : "100%"};
   background-color: black;
   top: 0px;
   bottom: 5px;
   left: 0;
`

export const CloseMenu = styled.button`
   padding: 10px;
   border: none;
   font-weight: 600;
   font-size: 18px;
`
export const OpenMenu = styled.button`
   padding: 10px;
   border: none;
   font-weight: 600;
   font-size: 18px;
   background-color: red;
`

export const Container = styled.div`
   flex: 1;
   background-color: black;
   color: white;
   padding: 15px 10px 30px 15px;
   border-right: .5px solid #333;
`

export const Spacing = styled.hr`
   border: 1px solid gray;
   width: 100%;
`

export const Wrapper = styled.div`
   padding: 10px;
   display: flex;
   gap: 0 20px;
   background-color: red;
   border-radius: 8px;
`

export const MenuWrapper = styled.div`
   gap: 0 20px;
   display: flex;
   padding: 10px;
   ${'' /* color: gray; */}
   font-weight: ${({active}) => active ? 600 : 500};
   transition: all 500ms ease-in-out;
   align-items: center;

   &:hover {
      color: orange;
   }
`

export const Title = styled.h2`
   margin-top: ${({menuTitle}) => menuTitle ? '35px' : '0'};
   font-size: ${({menuTitle}) => menuTitle ? '1.2rem' : '1.5rem'};
   font-weight: 600;
   margin-left: ${({menuTitle}) => menuTitle ? '15px' : '0'};
`

export const MenuList  = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 10px;
   align-content: center;

   & a {
      text-decoration: none;
   }
`

export const Icon = styled.div`
   color: ${({big}) => big ? "white" : "gray"};
   font-size: ${({big}) => big ? "2.5rem" : "1.5rem"};
`

export const MenuItem  = styled.li`
   list-style: none;
   cursor: pointer;
`