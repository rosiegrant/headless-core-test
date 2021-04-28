import './App.css';
import { provideStatefulCore } from 'stateful-core';

const query = "open positions!";

function App() {

  const coreLibrary = provideStatefulCore({
    apiKey: '3517add824e992916861b76e456724d9',
    experienceKey: 'answers-js-docs',
    experienceVersion: 'PRODUCTION'
  })

  const handleQuerySubmission = submitEvent => {
    submitEvent.preventDefault();
    coreLibrary.setQuery({ query })
    coreLibrary.executeUniversalQuery()
      .then(console.log(coreLibrary.state));
  }

  return (
    <div className="App">
        <div>
            <form onSubmit={handleQuerySubmission}>
                <input type="text" value={query}/>
                <button type="submit">submit</button>
            </form>
        </div>


    </div>
  );
}

export default App;
