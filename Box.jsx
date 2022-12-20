import './Box.css'
import React,{forwardRef} from 'react'
function Box(props,ref)
{
    return(
        <>
        <input maxLength="1" className='text-center text-primary fw-bold fs-1 form-control' type="text" name="" id="" placeholder='0' onChange={props.val} ref={ref} />
        </>
    )
}

export default forwardRef(Box)