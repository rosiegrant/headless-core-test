import './App.css';
import { provideStatefulCore } from 'stateful-core';

function App() {

  const coreLibrary = provideStatefulCore({
    apiKey: '3517add824e992916861b76e456724d9',
    experienceKey: 'answers-js-docs',
    experienceVersion: 'PRODUCTION'
  })

  // this should be refactored into a search bar component
  const handleQuerySubmission = submitEvent => {
    submitEvent.preventDefault();
    coreLibrary.executeUniversalQuery().then(console.log(coreLibrary.state.universal.results));
  }

  return (
    <div className="App">
        <div>
            <form onSubmit={handleQuerySubmission}>
                <input type="text" onInput={e => {coreLibrary.setQuery(e.target.value)}}/>
                <button type="submit">submit</button>
            </form>
        </div>
    </div>
  );
}

export default App;
