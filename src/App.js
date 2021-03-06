import axios from "axios";
import React, { useState, useEffect} from "react";
import './App.css';
import MusicTable from "./Components/MusicTable/MusicTable";
import SearchBar from "./Components/SearchBar/SearchBar";
import TitleBar from "./Components/TitleBar/TitleBar";
// import DeleteSong from "./Components/DeleteSong/DeleteSong";
import StickyNav from './Components/StickyNav/StickyNav';



function App() {
   const [musicList,setMusicList] = useState([]);
   const [query, setQuery] = useState("");


  async function getTable() {
   try{
    let response = await axios.get('http://localhost:5005/api/songs');
      
     setMusicList(response.data); 
      
   }catch (ex) {
      console.log("API call failed");
    }
  }
  
 useEffect(()=>{
   getTable();
 },[]);

 function search(rows) {
   const columns = rows[0] && Object.keys(rows[0]);
   return rows.filter((row) =>
     columns.some(
       (column) =>
         row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
     )
   );
 }
   
   return (
      <div>
        <StickyNav />
         <TitleBar/>
         <SearchBar query={query} setQuery={setQuery} />
        <MusicTable  musicList={search(musicList)} />
       </div>
    );
}
   

  


export default App; 