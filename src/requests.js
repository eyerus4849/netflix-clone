const Api_Key="6e1f9f8e817f16c462abbf125e68f329";
const requests={
    fetchTrending:`trending/all/week?api_key=${Api_Key}&language=en-Us`,
    fetchNetflixOrginals:`/discover/tv?api_key=${Api_Key}&with_networks=213&certification=PG&certification_country=US`,
    fetchTopRatedMovies:`/movie/top_rated?api_key=${Api_Key}&language=en-Us`,
    fetchActionMovies:`/discover/movie?api_key=${Api_Key}&with_genres=28&certification=PG&certification_country=US`,
    fetchComedyMovies:`/discover/movie?api_key=${Api_Key}&with_genres=35&certification=PG&certification_country=US`,
    fetchHorrorMovies:`/discover/movie?api_key=${Api_Key}&with_genres=27&certification=PG&certification_country=US`,
    fetchRomanceMovies:`/discover/movie?api_key=${Api_Key}&with_genres=10749&certification=PG&certification_country=US`,
    fetchDocumentaries:`/discover/movie?api_key=${Api_Key}&with_genres=99&certification=PG&certification_country=US`,
    fetchFamilyMovies:`/discover/movie?api_key=${Api_Key}&with_genres=10751`,
    fetchcrimeMovies:`/discover/movie?api_key=${Api_Key}&with_genres=80&certification=PG&certification_country=US`,

};
export default requests;
// https://api.themoviedb.org/3/discover/tv?api_key=${Api_Key}&with_networks=213