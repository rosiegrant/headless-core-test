import './App.css';
import { provideStatefulCore } from 'stateful-core';
import SearchBar from './components/searchbar';
import UniversalResults from './components/universalresults';
import React, { useState } from 'react';
import Autocomplete from './components/autocomplete';
import StateListener from 'stateful-core/lib/esm/state-listener';

function App() {
  const [currentResults, setCurrentResults] = useState([]);
  const [currentAutocompleteResults, setCurrentAutcompleteResults] = useState([]);
  const coreLibrary = provideStatefulCore({
    apiKey: '3517add824e992916861b76e456724d9',
    experienceKey: 'answers-js-docs',
    experienceVersion: 'PRODUCTION',
    locale: "en"
  })

  // add listeners
  //const universalResultsListener: StateListener<string> = { //need TS for this
  const universalResultsListener = {
    valueAccessor: state => state.universal.results,
    callback: results =>  {
      results.verticalResults && results.verticalResults[0] ? setCurrentResults(results.verticalResults[0].results) : setCurrentResults([]);
    }
  };

  coreLibrary.addListener(universalResultsListener);

  const universalAutocompleteListener = {
    valueAccessor: state => state.universal.autoComplete,
    callback: autoComplete => {
      autoComplete.results ? setCurrentAutcompleteResults(autoComplete.results) : setCurrentAutcompleteResults([])

    }
  }
  coreLibrary.addListener(universalAutocompleteListener);

  // search bar methods
  const handleQuerySubmission = submitEvent => {
    submitEvent.preventDefault();
    coreLibrary.executeUniversalQuery();

  }

  const handleQueryUpdate = updateEvent => {
    coreLibrary.setQuery(updateEvent.target.value);
    //coreLibrary.executeUniversalAutoComplete(); // this breaks the results
  }

  return (
    <div className="App">
        <SearchBar  
          handleQueryUpdate={handleQueryUpdate}
          handleQuerySubmission={handleQuerySubmission}
        />
        <Autocomplete 
          results={currentAutocompleteResults}
        />
        <UniversalResults
          results={currentResults}
        />
    </div>
  );
}

export default App;
