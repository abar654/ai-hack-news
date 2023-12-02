import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/test')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className="App">
            {data ? (
                <div>
                    {JSON.stringify(data)}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
