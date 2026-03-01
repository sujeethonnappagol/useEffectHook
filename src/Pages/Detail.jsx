import { useEffect } from "react";
function Detail() {
    useEffect(()=>{
        console.log("Detail mounted");
        return()=>{
            console.log("Detail unmounted");
        }
    })   
  return (
    <> 
         <h1 className="text-3xl font-bold underline">This is Detail Page </h1>
    </>
  )
}
export default Detail;