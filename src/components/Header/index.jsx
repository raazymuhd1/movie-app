import { Container, MenuList, MenuItem } from "./styles.js"
import {MdLiveTv, MdNotificationsActive, MdMore} from "react-icons/md"
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <Container className={styles.container}>
        <MenuList className={styles.menuList_left}>
            <MenuItem className={styles.menu_item} active> Movies </MenuItem>
            <MenuItem className={styles.menu_item}> Series </MenuItem>
            <MenuItem className={styles.menu_item}> Tv Shows </MenuItem>
            <MenuItem className={styles.menu_item}> Animations </MenuItem>
        </MenuList>
        <MenuList className={styles.menuList_right} right>
           <MenuItem className={styles.menu_item} active  right> 
              <MdLiveTv />
            </MenuItem>
           <MenuItem className={styles.menu_item} right> 
              <MdNotificationsActive />
            </MenuItem>
           <MenuItem className={styles.menu_item} right> 
              <MdMore />
            </MenuItem>
        </MenuList>
    </Container>
  )
}

export default Header