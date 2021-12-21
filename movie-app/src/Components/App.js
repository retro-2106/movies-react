import React from 'react'; 
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard'

class App extends React.Component {
componentDidMount() {
  // when we make api call we dispatch an action
  const {store} = this.props;
  store.subscribe(() =>{
    console.log('UPDATED');
    this.forceUpdate();
  });
  store.dispatch({
      type: 'ADD_MOVIES',
      movies: data
  });
  // whenever we dispatch an action it will call subscribe method then rest of flow will continue.
  console.log('STATE', this.props.store.getState())
}

  render()
  {const movies = this.props.store.getState();
  return (
    <div className="App">
      <Navbar/>
      <div className='main'>
        <div className='tabs'>
          <div className='tab'>Movies</div>
          <div className='tab'>Favourites</div>
        </div>

        <div className='list'>
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={`movies-${index}`}/>
          ))}
        </div>
      </div>
      
    </div>
  );}
}

export default App;
