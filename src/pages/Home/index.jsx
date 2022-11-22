import {Popular, Upcoming, TopRated, Trending, NowPlaying} from "../../components"
import {Container} from "./styles.js"
import ErrorBoundary from "../../helpers/ErrorBoundary"

const Home = () => {
  return (
    <Container>
       <ErrorBoundary>
          <Popular transform />
       </ErrorBoundary>
       <ErrorBoundary>
          <Trending transform />
       </ErrorBoundary>
       <ErrorBoundary>
          <NowPlaying transform />
       </ErrorBoundary>
       <ErrorBoundary>
          <Upcoming transform />
       </ErrorBoundary>
       <ErrorBoundary>
          <TopRated transform />
       </ErrorBoundary>
    </Container>
  )
}

export default Home