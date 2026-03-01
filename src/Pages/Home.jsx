import { useEffect , useState } from "react";
function Home() {
    let [data,setData]=useState(0);
    useEffect(()=>{
        console.log("Home mounted");
        return()=>{
            console.log("Home unmounted");
        }
    },[])   
  return (
    <> 
        <div className="mx-auto w-[500px] mt-10 ">
            <h1 className="text-3xl font-bold underline">This is Home Page and my data is {data} </h1>
            <button className="px-4 py-2 border rounded-lg bg-blue-500 text-center justify-center mt-4" onClick={()=>setData(data+1)}>Update data</button>
        </div>
    </>
  )
}
export default Home;