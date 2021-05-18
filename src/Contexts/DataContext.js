import {createContext,useContext,useReducer,useState,useEffect} from 'react';
import axios from 'axios';
import {dataReducer} from '../reducers/dataReducer';

const DataContext = createContext();

const initialState={
    data:[],
    cart:[],
    wishList:[],
    loading:false,
    sortBy:null,
    showInventory:false,
    fastDelivery:false,
    isRated:null,
    rating:0,
    isPrices:null,
    price:0
}
export const DataProvider=({children})=>{
    useEffect(() => {
      (async()=>{
          try{
               dispatch({type:'LOADING_STATUS',payload:true}); 
               const {data:{products}}=await axios.get('/api/products')
               dispatch({type:'DATA',payload:products})
            }
         catch(error){
              console.log(error)
         }   
         finally{
             dispatch({type:'LOADING_STATUS',payload:false});
         }  
       }) (); 
        
    }, [])

    const [state,dispatch]=useReducer(dataReducer,initialState);
  //  const [sideBar,setSidebar]=useState(false);
    return(
        <DataContext.Provider value={{state,dispatch}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData=()=>useContext(DataContext);