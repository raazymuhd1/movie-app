import { Container, Wrapper, Title, MovieDetail, Image, MovieTitle, MovieYear, Info, More, SmallTitle} from "./styles.js"
import {Link } from "react-router-dom"
import {BsArrowRightSquare} from "react-icons/bs"
import styles from "./NowPlaying.module.scss"
import { IMAGE_URL, useGetMoviesQuery } from "../../features/movies.js"

const NowPlaying = ({transform}) => {
    const { data: nowPlaying, isFetching, isLoading } = useGetMoviesQuery(`/movie/now_playing`, { pollingInterval: 4000 })

    if(isFetching) {
        return <h2> please wait .. </h2>
    }

  return (
    <Container>
        <Wrapper className={styles.wrapper_top} top>
                <Title className={styles.title}> Now Playing Movies </Title>
                <Link style={{textDecoration: "none"}} to="/now-playing">
                { transform && (
                    <More className={styles.more}>
                        <SmallTitle className={styles.small_title}> See More </SmallTitle>
                        <BsArrowRightSquare className={styles.arrow_icon} style={{fontSize: "1.3rem", color: "white"}} />
                    </More>
                ) }
                </Link>
           </Wrapper>
        <Wrapper className={styles.wrapper_bottom}>
            { transform ? nowPlaying && nowPlaying.length > 0 && nowPlaying.slice(0, 10).map(movie => (
                <MovieDetail key={movie.id}>
                    <Image className={styles.movie_image} src={`${IMAGE_URL}/${movie.poster_path}`} />
                    <Info>
                        <MovieTitle className={styles.movie_title}> {movie.title.length > 20 ? movie.title.substring(0, 15) : movie.title}.. </MovieTitle>
                        <MovieYear> {movie.release_date.substring(0,4)} </MovieYear> 
                    </Info>
                </MovieDetail>
            )) :
            nowPlaying && nowPlaying.length > 0 && nowPlaying.map(movie => (
                    <MovieDetail key={movie.id}>
                    <Image className={styles.movie_image} src={`${IMAGE_URL}/${movie.poster_path}`} />
                    <Info>
                        <MovieTitle className={styles.movie_title}> {movie.title.length > 20 ? movie.title.substring(0, 15) : movie.title}.. </MovieTitle>
                        <MovieYear> {movie.release_date.substring(0,4)} </MovieYear> 
                    </Info>
                </MovieDetail>
                ))
             }
        </Wrapper>
    </Container>
  )
}

export default NowPlaying