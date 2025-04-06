import React, { useState } from "react";
import Navbar from './Components/Navbar'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import {filterData,apiUrl} from './data'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Spinner from "./Components/Spinner";

const App = () => {

	const [courses, setCourses]= useState(null);
	const [loading, setLoading]= useState(true);	
	const [category, setCategory]= useState(filterData[0].title);	


      // useEffect: using for api call
		useEffect(() => {
			const FetchData = async () =>{
				setLoading(true);
				try{
					const response = await fetch(apiUrl);
					const output = await response.json();
					// save data into variable:
					// console.log(output);
					setCourses(output.data);

				}
				catch(err){
					toast.err("something went wrong")
				}
				setLoading(false);
			}
			FetchData();
		}, []);

  

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2 App">
      	<Navbar/> 

	  	<div className="bg-bgDark2">
	  		<Filter filterData= {filterData}
			category ={category}
			setCategory={setCategory}
			/>

			<div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]:">
			{
				loading ? (<Spinner/>) : (<Cards courses={courses} 
												category={category}/>)
			}
			
			</div>
	  	</div>
     
      
    </div>
  )

};

export default App;
