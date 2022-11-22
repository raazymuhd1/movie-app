import { Container, AccountDetail, AccountInfo, AccountName, AccountEmail, MediaServices, MediaDetail, MediaName, MediaImage, Title, Genres, GenreDetail, GenreTitle, Spacing} from "./styles.js"

// react icons
import {FaUserCircle} from "react-icons/fa"
import {IoIosArrowDown} from "react-icons/io"
import {mediaServices, genres} from "./data"
import styles from "./RightBar.module.scss"

const RightBar = () => {
   
  return (
    <Container className={styles.container}>
       <AccountDetail>
          <FaUserCircle style={{ fontSize: "1.5rem" }} />
          <AccountInfo>
              <AccountName> Mohammed Raazy </AccountName>
              <AccountEmail> muhammadrazi51@gmail.com </AccountEmail>
           </AccountInfo>
           <IoIosArrowDown style={{ fontSize: "1.5rem" }} />
       </AccountDetail>
       <Title> Media Services </Title>
       <Spacing />
       <MediaServices>
          { mediaServices.map(media => (
            <MediaDetail key={media.id}>
                <MediaImage src={media.img} />
                <MediaName> {media.name} </MediaName>
            </MediaDetail>
          )) }
       </MediaServices>
       <Title> Genres </Title>
       <Spacing />
       <Genres>
            {genres.map(genre => (
               <GenreDetail key={genre.id}>
                   <GenreTitle> {genre.name} </GenreTitle>
               </GenreDetail>
            ))}
       </Genres>
    </Container>
  )
}

export default RightBar