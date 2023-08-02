import React from 'react';
import Tasks from "./Tasks";
import dataState, { Data } from "./state";

type App1Props = Data

function App1(props: App1Props) {

  return (
    <div className="App">
      <Tasks data1={dataState.data1}
        data2={dataState.data2} />
    </div>
  );
}

export default App1;