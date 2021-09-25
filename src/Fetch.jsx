import React,{useState,useEffect}  from 'react';
import Spiner from "./Spiner";
import Cards from "./Cards";

 function Fetch(props )
 {
 const[gitdata,setgitData]=useState([]);
     const[toggle,setToggle]=useState(true);
    async function  getData()
     {
         console.log(props.val);
        //  https://jsonplaceholder.typicode.com/albums/1/photos
        //  console.log()
         try{
            const response= await fetch(`https://reqres.in/api/users?page=${props.val}`);
            setToggle(false);
            const newdata=await response.json(); 
            setgitData( newdata.data);

         }
         catch(error)
         {
              console.log("my error is:" +error )
         }
       
   

     }
     useEffect(()=>{
         getData();

     },[props.val])
     if(toggle)
     {
         return <Spiner/>
     }
     console.log('testing ' +gitdata)
  return (
    <>
     
      <div className="my-3">
        <h2 className="text-center">Users Details</h2>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className=" col-10 mx-auto">
            <div className="row gy-4">
            
              {gitdata.map((val,ind)=>{
                return(
                    

                <Cards
                    first_name={val.first_name}
                    last_name={val.last_name}
                    email={val.email}
                    imgsrc={val.avatar}
                    key={val.id}
                    id={val.id}
                  />
                )
              })}
                
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Fetch;