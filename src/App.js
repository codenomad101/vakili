import {useState,useEffect} from 'react';
import Loading from './Loading';
import './App.css';
import Lawyers from './Lawyers';

const BASE_URL = process.env.REACT_APP_API_VAKILI;

function App() {
  const [data, setData]=useState("");
  const [loading, setLoading]=useState(true);

  const fetchData=async ()=>{
    setLoading(true);
    try{
      const response= await fetch(BASE_URL);
      const myData=await response.json();
      setLoading(false);
      setData(myData);
    }catch(error)
    {
      setLoading(false);
      console.log(error)
    } 
  }
   useEffect(()=>{
fetchData() 
  },[])

  if (loading)
  {
   return (
     <main>
       <Loading />
     </main>
   )
  }
  return (
    <div className="App">
     <Lawyers data={data} key={data.id}/>
     
    
    </div>
  );
}

export default App;
