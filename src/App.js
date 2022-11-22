import styles from "./App.module.scss"
import { Trending, Sidebar, Header, RightBar, Popular, Footer, TopRated, NowPlaying, Upcoming } from './components';
import {  Routes, Route } from "react-router-dom"

import {  Home } from "./pages"
import ErrorBoundary from "./helpers/ErrorBoundary";

function App() {
  return (
    <div className={styles.app}>
       <Sidebar />
       <section className={styles.main}>
          <Header />
          <Routes>
            <Route path="/">
                <Route index element={ <Home /> } />
                <Route path="/popular" element={ 
                  <ErrorBoundary>
                      <Popular /> 
                  </ErrorBoundary>} 
                 />
                <Route path="/trending" element={
                  <ErrorBoundary>
                      <Trending /> 
                  </ErrorBoundary>
                  } />
                <Route path="/now-playing" element={ 
                    <ErrorBoundary>
                      <NowPlaying /> 
                  </ErrorBoundary>
                   } />
                <Route path="/upcoming" element={ 
                  <ErrorBoundary>
                      <Upcoming /> 
                  </ErrorBoundary>
                } />
                <Route path="/top-rated" element={ 
                  <ErrorBoundary>
                      <TopRated /> 
                  </ErrorBoundary>
                } />
            </Route>
          </Routes>
          <Footer />
       </section>
        <RightBar />
    </div>
  );
}

export default App;
