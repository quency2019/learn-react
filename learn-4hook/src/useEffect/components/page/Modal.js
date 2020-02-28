import React from 'react';
import '../css/modal.css'
function Modal(props) {
   /* if (!props.isShow){
        return null
    }*/

   const defaultProps={
       bg:'rgba(12,55,48,0.5)'
   }
   const data={...defaultProps,...props}

   console.log(data)
    return <div className='modal' style={{
        backgroundColor:data.bg
    }} onClick={e => {
        if (e.target.className==='modal'){
            data.onClose()
        }
    }}><div className='modalCenter'>{data.children}</div>
   </div>

}

export default Modal;
