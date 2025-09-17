import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
function useDifferentDishesdata() {
     const {collectionId} = useParams()
    
    const [Data,setData] = useState(null)

    useEffect(() => {

        const  fetchData = async () =>{
            try{
                let response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.748748477919516&lng=75.87155018001795&collection=${collectionId}&tags=layout_CCS_Rolls&sortBy=&filters=&type=rcv2&offset=0&page_type=null`)
                let data = await response.json()
                setData(data)
            }
            catch (error) {
        console.error("❌ Failed to fetch menu:", error);
        
      }
        }

        fetchData()

    },[])

    return(Data)
    
  
}

export default useDifferentDishesdata;