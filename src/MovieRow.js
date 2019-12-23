import React from "react";

class MovieRow extends React.Component {
  viewMovie() {
    // console.log("Trying to view movie")
    // console.log(this.props.movie.title)
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    return (
      <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img
                class="img_css"
                alt="poster"
                src={this.props.movie.poster_src}
              />
            </td>
            <td>
              <h3 class="titleHeader" align="top">
                {this.props.movie.title}
              </h3>
              <p class="body_css">{this.props.movie.overview}</p>
              <input
                type="button"
                value="watch"
                class="button_css"
                onClick={this.viewMovie.bind(this)}
              ></input>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MovieRow;
