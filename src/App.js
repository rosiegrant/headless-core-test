import './App.css';
import { provideStatefulCore } from 'stateful-core';
import SearchBar from './components/searchbar';

function App() {

  const coreLibrary = provideStatefulCore({
    apiKey: '3517add824e992916861b76e456724d9',
    experienceKey: 'answers-js-docs',
    experienceVersion: 'PRODUCTION'
  })

  // this should be refactored into a search bar component
  const handleQuerySubmission = submitEvent => {
    submitEvent.preventDefault();
    coreLibrary.executeUniversalQuery().then(
      
      console.log(coreLibrary.state.universal.results),

      document.getElementById("results").innerHTML = JSON.stringify(coreLibrary.state.universal.results)
      
    );
  }

  return (
    <div className="App">
        <SearchBar  
          handleQueryUpdate={e => {coreLibrary.setQuery(e.target.value)}}
          handleQuerySubmission={handleQuerySubmission}
        />
        <div id="results">
        </div>
    </div>
  );
}

export default App;
