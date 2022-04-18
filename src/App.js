import React, { useState, useEffect } from 'react';
import Loading from './components/Loading'
import AllTours from './components/AllTours';
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
    <main>
      <Loading/>
    </main>
    )
  }
  
  return (
    <main>
      <div className="title">
        <AllTours tours={tours}/>
      </div>
    </main>
  );
}

export default App;