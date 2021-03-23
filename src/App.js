import propTypes from "prop-types";
import axios from "axios";
import React from "react";
import Movies from "./Movies";
import "./App.css"

//html태그 사이에 {}를 사용하는 것 만으로 손쉽게 자바스크립트 코드를 삽입할 수 있다.
// function Food({ name, image, rating }) {

//   return <li>
//     <h1>I like {name}</h1>
//     <img src={image} alt={name} width="300" height="200" />
//     <h3>점수: {rating} / 5.0</h3>
//   </li>

// }

// //propTypes는 코드에 안정성을 더해주는데 매우 매우 유용하다.
// //설치하려면 npm -i prop-types를 입력해준다.
// Food.propTypes = {
//   name: propTypes.string.isRequired,
//   image: propTypes.string.isRequired,
//   rating: propTypes.number.isRequired //isRequired를 붙이면 반드시 rating이 number로 들어와야한다. (isRequired가 없으면 rating이 없어도 된다.)
// }

// const foodILike = [
//   {
//     id: 1,
//     name: "kimchi",
//     image: "https://cdn.pixabay.com/photo/2019/07/25/01/35/kimchi-4361465_1280.jpg",
//     rating: 4.8
//   },
//   {
//     id: 2,
//     name: "김밥",
//     image: "https://cdn.pixabay.com/photo/2017/08/08/09/44/food-photography-2610864_1280.jpg",
//     rating: 4.5
//   },
//   {
//     id: 3,
//     name: "돈가스",
//     image: "https://cdn.pixabay.com/photo/2018/12/21/11/38/money-is-3887745_1280.jpg",
//     rating: 3.8
//   },
//   {
//     id: 4,
//     name: "피자",
//     image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
//     rating: 4.0
//   }

// ]

// function App() {
//   return (

//     <div className="App">
//       <ul>
//         {foodILike.map(object => <Food key={object.id} name={object.name} image={object.image} rating={object.rating} />)}
//       </ul>
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    count: 0,
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    ); //이렇게{:}으로 내부로 들어가는것도 ES6 문법이라는데... 어렵고만.
    this.setState({ isLoading: false });
    this.setState({ movies }); //movies:movies로 넣어야 하지만 최신 자바 스크립트는 이해한다.
  }; //비동기적 처리를 필요로 할때 async를 함수 앞에 붙이고 기다릴것을 await로 표시해준다.

  componentDidMount() {
    this.getMovies();
  }

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  }; //currnet를 사용하는것이 좋은 방법이다. (this.state.count로 접근하는것보다)
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  //setState를 사용하면 그때마다 react는 render()를 다시 실행시켜준다!! 그래서 setState를 사용하는 것이다.
  //이 점을 반드시 기억하도록 하자!

  render() {
    const { isLoading, movies } = this.state; //ES6에서 가능하게 된 문법이라는데.... 헐.. 몰게써요..
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movies
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
        {/* <h1>The number {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button> */}
      </section>
    );
  }
}
export default App;
