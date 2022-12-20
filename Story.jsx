import React from 'react'
import { useGlobalContext} from './AppProvider'
const Story = () => {
  const {hits,isLoading} = useGlobalContext()
    // let apiData = 'https://reqres.in/api/users?page=30
    if(isLoading)
    {
      return(
        <div className='d-flex justify-content-center align-items-center vh-100'>
          <h1 className='w-100 bg-danger text-warning text-center fw-bold display-1 py-5'>Loading .....</h1>
          </div>
      )
    }
    return (
      <>
      <div className='bg-dark'>
          {hits.map((i)=>{
            return <h1 className='text-center text-white fw-bold'>{i.title}</h1>
          })}
      </div>
      </>
    )
}

export default Story