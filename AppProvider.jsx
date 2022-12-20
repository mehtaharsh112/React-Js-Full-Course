import React,{createContext,useEffect,useReducer, useContext} from "react";
let api = 'https://hn.algolia.com/api/v1/search?'
let AppContext = createContext()
const initialState = {
    isLoading:true,
    query:'html',
    nbPages:0,
    pages:0,
    hits:[]
}
const AppProvider = ({children})=>{
    
    let reducer = (state,action)=>{
        switch(action.type)
        {
            case 'stories' : 
            return {
                ...state,
                hits:action.payload.hits,
                nbPages:action.payload.nbPages,
                isLoading:false
            }
            case 'loader' :
                return {
                    isLoading:true
                }
        }
        return state
    }
    const [state,dispatch] = useReducer(reducer, initialState)
    let fData = async (e)=>{
        dispatch({type:'loader'})
   try {
    var data = await fetch(e)
    var jData = await data.json()
    // console.log(jData)
    dispatch({
        type:'stories',
        payload:{
            hits:jData.hits,
            nbPages:jData.nbPages
        }
    })
   } catch (error) {
    console.log(error)
   }
    }
    useEffect(() => {
      fData(`${api}query=${state.query}&query=${state.pages}`)
    fData(api)
    }, []);
    return(
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )
   
}

let useGlobalContext = ()=> {
   return useContext(AppContext)
}
export {AppProvider, AppContext , useGlobalContext}
