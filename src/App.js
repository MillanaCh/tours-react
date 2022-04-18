import "./App.css";
import Loading from "./components/Loading";
import AllTours from "./components/AllTours";
import {useState, useEffect} from "react"
function App() {
  const [loading, setLoading] = useState(true)
  const [AllDataTours, setAllDataTours] = useState([])
  const url = "https://course-api.com/react-tours-project";
  const fetchTours = async() => {
    setLoading(false)
    try{
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setAllDataTours(tours)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])
  if(loading){
    return(
      <main><Loading/></main>
    )
  }
  return (
    <div className="App">
      <AllTours {...AllDataTours}/>
    </div>
  );
}

export default App;

//component - AllTours.jsx(all) and Tours.jsx()(each tour)
