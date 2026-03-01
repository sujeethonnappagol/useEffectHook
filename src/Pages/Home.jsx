import { useEffect } from "react";
function Home() {
    useEffect(()=>{
        console.log("This is Home Page");
    },[])   
  return (
    <> 
         <h1 className="text-3xl font-bold underline">This is Home Page </h1>
    </>
  )
}
export default Home;