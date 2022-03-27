import React from 'react'
import {Formik, useFormik} from 'formik'


const initialValues = {
  name:'Anita',
  email:'',
  channel:''
}

const onSubmit =  values =>{
  console.log('Form data', values)
}

const validate =  values =>{
  let errors = {}
  if (!values.name){
    errors.name = 'Name is required'
  }
  if (!values.email){
    errors.email = 'Email is required'
  }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)){
    errors.email='Invalid email format'
  }
  if (!values.channel){
    errors.channel = 'Channel is required'
  }
  return errors
}

function YouTubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })

  console.log('formik values', formik.values)
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
          <div className='form-control'>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.name}/>
            {formik.touched.name && formik.errors.name? <div className='error'>{formik.errors.name}</div> : null}
          </div>

          <div  className='form-control'>
            <label htmlFor="channel">Email</label>
            <input type="email" id='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}  values={formik.values.email}/>
            {formik.touched.email && formik.errors.email? <div className='error'>{formik.errors.email}</div> : null}
          </div>
            
          <div  className='form-control'>
            <label htmlFor="channel">Channel</label>
            <input type="text" id='channel' name='channel' onChange={formik.handleChange} onBlur={formik.handleBlur}  values={formik.values.channel}/>
            {formik.touched.channel && formik.errors.channel? <div className='error'>{formik.errors.channel}</div> : null}
          </div>  

           
          <button>Submit</button>
        
        </form>
        
    </div>
  )
}

export default YouTubeForm