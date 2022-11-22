import {
     Container, 
     Wrapper, 
     Title, 
     MovieDetail,
     Image, 
     MovieTitle, 
     MovieYear, Info, 
     More, 
     SmallTitle
    } from "./styles.js"
import {Link } from "react-router-dom"
import {BsArrowRightSquare} from "react-icons/bs"
import styles from "./Trending.module.scss"
import { useGetMoviesQuery, IMAGE_URL } from "../../features/movies.js"

const Trending = ({transform}) => {
    const { data: trendingMovies, isFetching } = useGetMoviesQuery(`/trending/movie/day`, { pollingInterval: 4000 })

    if(isFetching) {
        return <h2> please wait .. </h2>
    }

  return (
    <Container>
        <Wrapper className={styles.wrapper_top} top>
                <Title className={styles.title}> Trending Movies </Title>
                <Link style={{textDecoration: "none"}} to="/trending">
                    { transform && (
                        <More className={styles.more}>
                            <SmallTitle className={styles.small_title}> See All </SmallTitle>
                            <BsArrowRightSquare className={styles.arrow_icon} style={{fontSize: "1.3rem", color: "white"}} />
                        </More>
                    ) }
                </Link>
           </Wrapper>
        <Wrapper className={styles.wrapper_bottom}>
            { transform && trendingMovies && trendingMovies.length > 0 ? trendingMovies.slice(0, 10).map(movie => (
                <MovieDetail key={movie.id}>
                    <Image className={styles.movie_image} src={`${IMAGE_URL}/${movie.poster_path}`} />
                    <Info>
                        <MovieTitle className={styles.movie_title}> {movie.title.length > 20 ? movie.title.substring(0, 15) : movie.title}.. </MovieTitle>
                        <MovieYear> {movie.release_date.substring(0,4)} </MovieYear> 
                    </Info>
                </MovieDetail>
            )) :
            trendingMovies && trendingMovies.length > 0 && trendingMovies.map(movie => (
                    <MovieDetail key={movie.id}>
                    <Image className={styles.movie_image} src={`${IMAGE_URL}/${movie.poster_path}`} />
                    <Info>
                        <MovieTitle> {movie.title.length > 20 ? movie.title.substring(0, 15) : movie.title}.. </MovieTitle>
                        <MovieYear> {movie.release_date.substring(0,4)} </MovieYear> 
                    </Info>
                </MovieDetail>
                ))
             }
        </Wrapper>
    </Container>
  )
}

export default Trending