const Api_Key="6e1f9f8e817f16c462abbf125e68f329";
const requests={
    fetchTrending:`trending/all/week?api_key=${Api_Key}&language=en-Us`,
    fetchNetflixOrginals:`/discover/tv?api_key=${Api_Key}&with_networks=213`,
    fetchTopRatedMovies:`/movie/top_rated?api_key=${Api_Key}&language=en-Us`,
    fetchActionMovies:`/discover/movie?api_key=${Api_Key}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${Api_Key}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${Api_Key}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${Api_Key}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${Api_Key}&with_genres=99`,
    fetchFamilyMovies:`/discover/movie?api_key=${Api_Key}&with_genres=10751`,

};
export default requests;
// https://api.themoviedb.org/3/discover/tv?api_key=${Api_Key}&with_networks=213