import { Container, Image, Title, Wrapper, MovieDetail, More, SmallTitle, MovieTitle, InfoWrapper, InfoDetail, MovieYear, InfoAction, Button } from "./styles.js"
import {BsArrowRightSquare} from "react-icons/bs"
import {MdAddBox} from "react-icons/md"
import {Link } from "react-router-dom"
import styles from "./Popular.module.scss"

import {IMAGE_URL, useGetMoviesQuery } from "../../features/movies.js"

const Popular = ({transform}) => {
    const { data: popularMovies } = useGetMoviesQuery(`/movie/popular`, { pollingInterval: 4000 })
    const randomMovie = Math.floor(Math.random(2) * popularMovies?.length)
    const sliceTo = randomMovie + 2


  return (
    <Container>
           <Wrapper className={styles.wrapper_top} top>
                <Title className={styles.title}> Popular Movies </Title>
                <Link style={{textDecoration: "none"}} to="/popular">
                    {transform && (
                        <More className={styles.more}>
                            <SmallTitle className={styles.small_title}> See All </SmallTitle>
                            <BsArrowRightSquare className={styles.arrow_icon} style={{fontSize: "1.3rem", color: "white"}} />
                        </More>
                    ) }
                </Link>
           </Wrapper>
           <Wrapper className={styles.wrapper_bottom}>
                    { transform && popularMovies && popularMovies.length > 0 ? popularMovies.slice(randomMovie, sliceTo).map(popular => (
                        <MovieDetail key={popular.id}>
                            <Image className={styles.movie_image} src={`${IMAGE_URL}/${popular.backdrop_path}`} />
                            <InfoWrapper className={styles.info_wrapper}> 
                                <InfoDetail>
                                    <MovieTitle className={styles.movie_title}> {popular.title} </MovieTitle>
                                    <MovieYear> {popular.release_date.substring(0, 4)} </MovieYear>
                                </InfoDetail>
                                <InfoAction>
                                    <Button> Watch Now </Button>
                                    <MdAddBox style={{fontSize: "2.5rem"}} />
                                </InfoAction>
                            </InfoWrapper>
                        </MovieDetail>
                    )) : 
                    popularMovies && popularMovies.length > 0 &&
                      popularMovies.map(movie => (
                        <MovieDetail key={movie.id}>
                            <Image className={styles.movie_image} small src={`${IMAGE_URL}/${movie.backdrop_path}`} />
                            <InfoWrapper> 
                                <InfoDetail>
                                    <MovieTitle className={styles.movie_title}> {movie.title} </MovieTitle>
                                    <MovieYear> {movie.release_date.substring(0, 4)} </MovieYear>
                                </InfoDetail>
                                <InfoAction>
                                    <Button> Watch Now </Button>
                                    <MdAddBox style={{fontSize: "2.5rem"}} />
                                </InfoAction>
                            </InfoWrapper>
                        </MovieDetail>
                      ))
                    }
           </Wrapper>
    </Container>
  )
}

export default Popular