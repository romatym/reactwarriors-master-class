import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";

// console.log(window.location.pathname);
// console.log(__dirname);
// console.log(__filename);

// const MovieItem = props => {
//   return (
//     <div>
//       <p>{props.item.title}</p>
//       <button type="button"
//         onClick={
//           function () {
//             //console.log(props.item.id);
//             props.removeMovieById(props.item.id);
//           }

//         }
//       >Delete</button>
//     </div>
//   )
// }


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      movies: moviesData
      , moviesWillWatch: []
    };
  };

  removeMovieById = id => {
    console.log(id);
    const updateMovies = this.state.movies.filter(function (movie) {
      return movie.id !== id;
      //this.SetState
    });
    console.log(updateMovies.length);
    this.setState({
      movies: updateMovies
    });
  };

  // updateMovies = (id) => {
  //   this.state.movies.filter(function (movie) {
  //     return movie.id !== id;
  //     //this.SetState
  //   });
  //   console.log(updateMovies.length);
  //   this.setState({
  //     movies: updateMovies
  //   });   
  // }

  addMovieToWillWatch = movie => {
    console.log("movie", movie);
    const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    updateMoviesWillWatch.push(movie);
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  }

  removeMovieFromWillWatch = id => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function (movie) {
      return movie.id !== id;
      //this.SetState
    });
    //console.log(updateMovies.length);
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  }

  render() {
    // console.log("render");
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map(movie => {

                return (
                  <div className="col-6" key={movie.id}>
                    <MovieItem
                      item={movie}
                      removeMovieById={this.removeMovieById}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                );
              })};
            </div>

            })

          }</div>
          <div className="col-3">
            <h2>Will watch: {this.state.moviesWillWatch.length}</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
