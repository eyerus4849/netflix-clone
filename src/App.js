import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import Row from './Row';
import requests from './requests';
import Nav from './Nav';
function App() {
  return (

    <div className="App">
<Nav />
      <Banner/>
      <Row title="NETFLIX ORGINAL" 
      fetchUrl={requests.fetchNetflixOrginals}
      isLargeRow/>
      <Row title="Trending Now" 
      fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated Movies" 
      fetchUrl={requests.fetchTopRatedMovies}/>
        <Row title="Family Dramas" 
      fetchUrl={requests.fetchFamilyMovies}/>
       <Row title="Action Movies" 
      fetchUrl={requests.fetchActionMovies}/>
      <Row title="RomanceMovies" 
      fetchUrl={requests.fetchRomanceMovies}/>
       <Row title="Comedy Movies" 
      fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" 
      fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Documentaries" 
      fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
