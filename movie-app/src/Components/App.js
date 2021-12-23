import React from 'react'; 
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard'
import { addMovies, setShowFavourite } from '../Actions';
class App extends React.Component {
componentDidMount() {
  // when we make api call we dispatch an action
  const {store} = this.props;
  store.subscribe(() =>{
    console.log('UPDATED');
    this.forceUpdate();
  });
  store.dispatch(addMovies(data));
  // whenever we dispatch an action it will call subscribe method then rest of flow will continue.
  console.log('STATE', this.props.store.getState())
}

  isMovieFavourite = (movie) => {
    const { movies} = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);

    if (index !== -1)
    {
      //movie found
      return true;
    }

    return false;
  }

  onChangeTab = (value) =>{
    this.props.store.dispatch(setShowFavourite(value))
  }

  render()
  {
    const { movies } = this.props.store.getState();
    const { list, favourites, showFavourites } = movies;
  console.log("RENDERING :", this.props.store.getState());

  const displayMovies = showFavourites ? favourites : list
  return (
    <div className="App">
      <Navbar/>
      <div className='main'>
        <div className='tabs'>
          <div className={`tab ${showFavourites ? '': 'active-tabs'}`} onClick={() =>this.onChangeTab(false)}>Movies</div>
          <div className={`tab ${showFavourites ? 'active-tabs': ''}`} onClick={() =>this.onChangeTab(true)}>Favourites</div>
        </div>
        
        <div className='list'>
          {displayMovies.map((movie, index) => (
            <MovieCard 
            movie={movie} 
            key={`movies-${index}`} 
            dispatch={this.props.store.dispatch}
            isFavourite={this.isMovieFavourite(movie)}
            />
          ))}
        </div>
        {displayMovies.length === 0 ? <div className='no-movies'>No movies to display !!</div>: null}
      </div>
      
    </div>
  );}
}

export default App;
