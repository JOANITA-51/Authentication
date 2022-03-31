import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'


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

const validationSchema = Yup.object({
  name: Yup.string().required('Required!'),
  email:Yup.string().email('Invalid email format').required('Required!'),
  channel:Yup.string().required('Required!')
})

function NewYouTubeForm() {
 
  console.log('formik values', formik.values)
  return (
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}>
        <Form >
          <div className='form-control'>
            <label htmlFor="name">Name</label>
            <Field type="text" id='name' name='name'/>
            {formik.touched.name && formik.errors.name? <div className='error'>{formik.errors.name}</div> : null}
          </div>

          <div  className='form-control'>
            <label htmlFor="channel">Email</label>
            <Field type="email" id='email' name='email'/>
            {formik.touched.email && formik.errors.email? <div className='error'>{formik.errors.email}</div> : null}
          </div>
            
          <div  className='form-control'>
            <label htmlFor="channel">Channel</label>
            <Field type="text" id='channel' name='channel'/>
            {formik.touched.channel && formik.errors.channel? <div className='error'>{formik.errors.channel}</div> : null}
          </div>  

           
          <button>Submit</button>
        
        </Form>
        
    </Formik>
  )
}

export default NewYouTubeForm