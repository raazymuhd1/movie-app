import {Container, Wrapper, MovieDetail, MovieTitle, MovieYear, Image, Title, Info, More, SmallTitle} from "./styles.js"
import {Link } from "react-router-dom"
import {BsArrowRightSquare} from "react-icons/bs"
import styles from "./Upcoming.module.scss"
import { IMAGE_URL, useGetMoviesQuery } from "../../features/movies.js"

const Upcoming = ({transform}) => {
    const { data: upcomingMovies, isLoading } = useGetMoviesQuery(`/movie/upcoming`, { pollingInterval: 4000 })


  return (
    <Container>
        <Wrapper className={styles.wrapper_top} top>
                <Title className={styles.title}> Upcoming Movies </Title>
                <Link style={{textDecoration: "none"}} to="/upcoming">
                    { transform && (
                        <More className={styles.more}>
                            <SmallTitle className={styles.small_title}> See More </SmallTitle>
                            <BsArrowRightSquare className={styles.arrow_icon} style={{fontSize: "1.3rem", color: "white"}} />
                        </More>
                    ) }
                </Link>
        </Wrapper>
        <Wrapper className={styles.wrapper_bottom}>
            { upcomingMovies && upcomingMovies.length > 0 && upcomingMovies.slice(0, 10).map(movie => (
                <MovieDetail key={movie.id}>
                    <Image className={styles.movie_image} src={`${IMAGE_URL}/${movie.poster_path}`} />
                    <Info>
                        <MovieTitle className={styles.movie_title}> {movie.title.length > 20 ? movie.title.substring(0, 15) : movie.title}.. </MovieTitle>
                        <MovieYear> {movie.release_date.substring(0,4)} </MovieYear> 
                    </Info>
                </MovieDetail>
            )) }
        </Wrapper>
    </Container>
  )
}

export default Upcoming