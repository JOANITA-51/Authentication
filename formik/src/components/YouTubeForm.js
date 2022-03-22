import React from 'react'
import {useFormik} from 'formik'

function YouTubeForm() {
  const formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      channel:''
    }
  })

  console.log('formik values', formik.values)
  return (
    <div>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' onChange={formik.handleChange} values={formik.values.name}/>

            <label htmlFor="channel">Email</label>
            <input type="email" id='email' name='email' onChange={formik.handleChange} values={formik.values.email}/>

            <label htmlFor="channel">Channel</label>
            <input type="text" id='channel' name='channel' onChange={formik.handleChange} values={formik.values.channel}/>

            <button>Submit</button>
        
        </form>
        
    </div>
  )
}

export default YouTubeForm