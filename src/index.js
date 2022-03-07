import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducer from './reducers'
import App from './routes/App'

//Para los que no pueden ver los videos porque ya no están disponibles, aquí dejo mi store con videos disponibles, espero que no los deshabiliten.

const initialState = {
  user: {},
  playing: {},
  myList: [],
  trends: [
    {
      id: 2,
      slug: "tvshow-2",
      title: "In the Dark",
      type: "Scripted",
      language: "English",
      year: 2009,
      contentRating: "16+",
      duration: 164,
      cover: "http://dummyimage.com/800x600.png/99118E/ffffff",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
      id: 3,
      slug: "tvshow-3",
      title: "Instinct",
      type: "Adventure",
      language: "English",
      year: 2002,
      contentRating: "16+",
      duration: 137,
      cover: "http://dummyimage.com/800x600.png/302140/ffffff",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
      id: 4,
      slug: "tvshow-4",
      title: "Grand Hotel",
      type: "Comedy",
      language: "English",
      year: 2014,
      contentRating: "16+",
      duration: 163,
      cover: "http://dummyimage.com/800x600.png/5472FF/ffffff",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      id: 5,
      slug: "tvshow-5",
      title: "Stargate Atlantis",
      type: "Scripted",
      language: "English",
      year: 2014,
      contentRating: "16+",
      duration: 194,
      cover: "http://dummyimage.com/800x600.png/B36F20/ffffff",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      id: 6,
      slug: "tvshow-6",
      title: "Final Space",
      type: "Scripted",
      language: "English",
      year: 2017,
      contentRating: "16+",
      duration: 124,
      cover: "http://dummyimage.com/800x600.png/CCC539/ffffff",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    },
    {
      id: 7,
      slug: "tvshow-7",
      title: "The InBetween",
      type: "Drama",
      language: "English",
      year: 2011,
      contentRating: "16+",
      duration: 179,
      cover: "http://dummyimage.com/800x600.png/FF7A90/ffffff",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
    }
  ],
  originals: [
    {
      id: 8,
      slug: "tvshow-8",
      title: "Stargate Atlantis",
      type: "Action",
      language: "English",
      year: 2012,
      contentRating: "16+",
      duration: 148,
      cover: "http://dummyimage.com/800x600.png/306880/ffffff",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
      id: 9,
      slug: "tvshow-9",
      title: "Alien Highway",
      type: "Action",
      language: "English",
      year: 2019,
      contentRating: "16+",
      duration: 128,
      cover: "http://dummyimage.com/800x600.png/604180/ffffff",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
    },
    {
      id: 10,
      slug: "tvshow-10",
      title: "Elementary",
      type: "Animation",
      language: "English",
      year: 2011,
      contentRating: "16+",
      duration: 346,
      cover: "http://dummyimage.com/800x600.png/FF91BA/ffffff",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
    },
    {
      id: 11,
      slug: "tvshow-11",
      title: "Strange Angel",
      type: "War",
      language: "English",
      year: 2015,
      contentRating: "16+",
      duration: 226,
      cover: "http://dummyimage.com/800x600.png/45807C/ffffff",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
    },
    {
      id: 12,
      slug: "tvshow-12",
      title: "Private Eyes",
      type: "Comedy",
      language: "English",
      year: 2018,
      contentRating: "16+",
      duration: 190,
      cover: "http://dummyimage.com/800x600.png/577380/ffffff",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
    },
    {
      id: 13,
      slug: "tvshow-13",
      title: "NCIS: Los Angeles",
      type: "Drama",
      language: "English",
      year: 2010,
      contentRating: "16+",
      duration: 160,
      cover: "http://dummyimage.com/800x600.png/5472FF/ffffff",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
    }
  ]
};

// fetch data from api external
const data = fetch("https://api.themoviedb.org/3/discover/movie?api_key=19fdfa04ac548b85e48bb87a45900d1d&language=es&include_image_language=es")
  .then(response => response.json())
  .then(data => {
    return data.results;
  });
console.log(data);


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (reducer , initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
