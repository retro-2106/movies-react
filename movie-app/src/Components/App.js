import React from 'react'; 
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard'
import { addMovies } from '../Actions';
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
    const { favourites} = this.props.store.getState();

    const index = favourites.indexOf(movie);

    if (index !== -1)
    {
      //movie found
      return true;
    }

    return false;
  }
  render()
  {const { list } = this.props.store.getState();
  console.log("RENDERING :", this.props.store.getState());
  return (
    <div className="App">
      <Navbar/>
      <div className='main'>
        <div className='tabs'>
          <div className='tab'>Movies</div>
          <div className='tab'>Favourites</div>
        </div>
        
        <div className='list'>
          {list.map((movie, index) => (
            <MovieCard 
            movie={movie} 
            key={`movies-${index}`} 
            dispatch={this.props.store.dispatch}
            isFavourite={this.isMovieFavourite(movie)}
            />
          ))}
        </div>
      </div>
      
    </div>
  );}
}

export default App;
