import SwipeToRevealActions from "./components/SwipeToRevealActions";

function App() {
  const data = [
    { title: "What is Lorem Ipsum?" },
    { title: "Why do we use it?" },
    { title: "Where can I get some?" },
    { title: "Where does it come from?" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 500 }} align="center">
          {data.map((val, i) => {
            return (
              <SwipeToRevealActions
                key={i}
                actionButtons={[
                  {
                    content: (
                      <div className="your-className-here">
                        <span>EDIT</span>
                      </div>
                    ),
                    onClick: () => alert("Pressed the EDIT button"),
                  },
                  {
                    content: (
                      <div className="your-className-here">
                        <span>DELETE</span>
                      </div>
                    ),
                    onClick: () => alert("Pressed the DELETe button"),
                  },
                ]}
                actionButtonMinWidth={70}
              >
                {val.title}
              </SwipeToRevealActions>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
