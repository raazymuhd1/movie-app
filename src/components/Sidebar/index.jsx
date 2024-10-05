import {useState} from "react"
// styled-components library
import { 
    OuterWrapper,
    SidebarWrapper, 
    Container, 
    MenuList, 
    MenuItem, 
    MenuWrapper, 
    Title, 
    Wrapper, 
    Spacing } from "./styles.js"
import {NavLink} from "react-router-dom"
import styles from "./Sidebar.module.scss"

// react-icons library
import {FiTrendingUp} from "react-icons/fi"
import {ImHome} from "react-icons/im"
import {SiToptal} from "react-icons/si"
import {BsLaptopFill, BsDownload, BsFillPlayBtnFill} from "react-icons/bs"
import {MdTableView, MdRecentActors, MdBookmarks} from "react-icons/md"
import {RiRecordMailFill} from "react-icons/ri"
import { CgDetailsMore } from "react-icons/cg"

const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(true)
    const activeStyle = {color: "orange"}
    const defaultStyle = { color: "gray" }

  return (
    <OuterWrapper>
        <SidebarWrapper>
            <CgDetailsMore className={styles.openIcon} onClick={() => setShowMenu(!showMenu)} />
                { showMenu && (
                    <Container className={styles.container}>
                            <Wrapper className={styles.title_wrapper}>
                                <RiRecordMailFill className={styles.icon} style={{fontSize: "2.5rem"}} />
                                <Title className={styles.title}> FunMovies </Title>
                            </Wrapper>
                            <Title menuTitle> Menu </Title>
                            <MenuList>
                                <NavLink to="/"
                                    style={({ isActive }) => isActive ? activeStyle : defaultStyle}>
                                    <MenuWrapper>
                                        <ImHome />
                                        <MenuItem> Home </MenuItem>
                                    </MenuWrapper>
                                </NavLink>
                                <NavLink 
                                    to="/popular" 
                                    style={({ isActive }) => isActive ? activeStyle : defaultStyle}>
                                    <MenuWrapper>
                                        <BsLaptopFill />
                                        <MenuItem> Popular </MenuItem>
                                    </MenuWrapper>
                                </NavLink>
                                <NavLink to="/trending"
                                    style={({ isActive }) => isActive ? activeStyle : defaultStyle}>
                                    <MenuWrapper>   
                                        <FiTrendingUp />
                                        <MenuItem> Trending </MenuItem>
                                    </MenuWrapper>
                                </NavLink>
                                <NavLink
                                    to="/now-playing"
                                    style={({ isActive }) => isActive ? activeStyle : defaultStyle}>
                                    <MenuWrapper>
                                        <BsFillPlayBtnFill />
                                        <MenuItem> Now playing </MenuItem>
                                    </MenuWrapper>
                                </NavLink>
                                <NavLink 
                                    to="/upcoming"
                                    style={({ isActive }) => isActive ? activeStyle : defaultStyle}>
                                    <MenuWrapper>
                                        <MdTableView />
                                        <MenuItem> Upcoming </MenuItem>
                                    </MenuWrapper>
                                </NavLink>
                                <NavLink 
                                    to="/top-rated"
                                    style={({ isActive }) => isActive ? activeStyle : defaultStyle}>
                                    <MenuWrapper>
                                        <MdTableView />
                                        <MenuItem> Top rated </MenuItem>
                                    </MenuWrapper>
                                </NavLink>
                            </MenuList>
                            <Spacing />
                            <Title menuTitle> Library </Title>
                            <MenuList> 
                                <MenuWrapper>
                                    <MdRecentActors />
                                    <MenuItem> Recent </MenuItem>
                                </MenuWrapper>
                                <MenuWrapper>
                                    <MdBookmarks />
                                    <MenuItem> Bookmarked </MenuItem>
                                </MenuWrapper>
                                <MenuWrapper>
                                    <SiToptal />
                                    <MenuItem> Most viewed </MenuItem>
                                </MenuWrapper>
                                <MenuWrapper>
                                    <BsDownload />
                                    <MenuItem> Downloaded </MenuItem>
                                </MenuWrapper>
                            </MenuList>
                    </Container>
                )}
        </SidebarWrapper>
    </OuterWrapper>
  )
}

export default Sidebar