import { useState } from 'react';
import { data } from "./data";
import Buttons from './Buttons';
import Clothes from "./Clothes";

function Home(){
    
    const [clothes, setClothes]= useState(data);
   
       const chosenClothes = (searchTerm) => {
         const newClothes = data.filter (element => element.searchTerm === searchTerm );
         setClothes(newClothes);
       }
      
      //мы используемметод филтр для этого создаем новую функцию и новую константу называем ее newCLorhes
      // теперь мы функцию chosenClothes  должны поместить в буттон чуть ниже 
      //переходим в док buttons и в начале где функция  пишем  function Buttons {filteredClothes} 
   //теперь должны все связать с кликом в папке Button где сами пишем onCLick={() => filteredClothes ("dress")}
   
      return (
         <div>
               <div className='cont'>
                  <h1 className='back'>Free Standard shipping</h1>
   
               </div>
               <Buttons filteredCLothes={chosenClothes} />
               <Clothes any={clothes} />
   
   
   
            </div>
      )
}
export default Home;