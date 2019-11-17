import React from "react";

class MovieItem extends React.Component {
  state = {
    willWatch: false
  }

  // toggleWillWatch() {
  //   const { item, removeMovieById, addMovieToWillWatch, removeMovieFromWillWatch } = this.props;
  //   if (this.state.willWatch) {
  //     removeMovieFromWillWatch(item.id);
  //   } else {
  //     addMovieToWillWatch(item.id);
  //   }
  //   this.setState({
  //     willWatch: !this.state.willWatch
  //   });
  // };

  render() {
    const { item, removeMovieById, addMovieToWillWatch, removeMovieFromWillWatch } = this.props;
    const classNameButton = `btn ${
      this.state.willWatch ? "btn-success" : "btn-secondary"
      }`;
    return (
      <div className="card">
        <img className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{item.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {item.vote_average}</p>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => removeMovieById(item.id)}
            >Delete
            </button>
            <button
              type="button"
              className={classNameButton}
              onClick={() => {
                this.setState({
                  willWatch: !this.state.willWatch
                });
                if (this.state.willWatch) {
                  removeMovieFromWillWatch(item.id);
                } else {
                  addMovieToWillWatch(item);
                }

              }}

            >Will Watch
            </button>

          </div>
        </div>
      </div>
    )
  }

}

export default MovieItem;
