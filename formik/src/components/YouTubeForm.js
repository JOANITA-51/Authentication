import React from 'react'
import {Formik, Form, Field, ErrorMessage, FieldArray} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'


const initialValues = {
  name:'Anita',
  email:'',
  channel:'',
  comment:'',
  address:'',
  social:{
      facebook:'',
      twitter:''
  },
  phoneNumbers: ['' , ''],
  phoneNumbers2:['']

}

const onSubmit =  values =>{
  console.log('Form data', values)
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required!'),
  email:Yup.string().email('Invalid email format').required('Required!'),
  channel:Yup.string().required('Required!')
})

function YouTubeForm() {
 
  return (
    <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}>
        <Form >
          <div className='form-control'>
            <label htmlFor="name">Name</label>
            <Field type="text" id='name' name='name'/>
            <ErrorMessage name='name' component={TextError}/>
          </div>

          <div  className='form-control'>
            <label htmlFor="channel">Email</label>
            <Field type="email" id='email' name='email'/>
            <ErrorMessage name='email'>
                {
                    errorMsg => <div className='error'>{errorMsg}</div>
                }
            </ErrorMessage>
          </div>
            
          <div  className='form-control'>
            <label htmlFor="channel">Channel</label>
            <Field type="text" id='channel' name='channel' placeholder='YouTube channel name'/>
            <ErrorMessage name='email'/>
          </div>  

            <div className="form-control">
                <label htmlFor="comment">Comment</label>
                <Field as='textarea' type="text" id='comment' name='comment'/>    
            </div>
            <div>
                <label htmlFor="facebook">Facebook Handle</label>
                <Field name='social.facebook' type='text' id='facebook'/>
            </div>

            <div className='form-control'>
                <label htmlFor="twitter">Twitter Handle</label>
                <Field name='social.twitter' type='text' id='twitter'/>
            </div>

            <div className="form-control">
                <label htmlFor="address">Address</label>
                <Field type='text' id='address' name ='address'>
                    {
                        (props)=>{
                            const {field, meta, form} = props
                            console.log('Render props', props)
                            return (
                                <div>
                                    <input id='address' type='text' {...field}/>
                                    {meta.touched && meta.error? <div>{meta.error}</div>: null}
                                </div>
                            ) 
                                
                            
                        }
                    }

                </Field>
            </div>

            <div className='form-control'>
              <label htmlFor="primaryPh">Primary Phone Number</label>
              <Field name='phoneNumbers[0]' type='text' id='primaryPh'/>
            </div> 

            <div className='form-control'>
                <label htmlFor="secondaryPh">Secondary Phone Number</label>
                <Field name='phoneNumbers[1]' type='text' id='secondaryPh'/>
            </div>

            <div>
            <label > List of Phone Numbers</label>  
            <FieldArray name='phoneNumbers2'>
              {
                (fieldArrayProps)=>{
                  const {push, remove, form} = fieldArrayProps
                  const {values} = form
                  const {phoneNumbers2} = values
                  return(
                    <div>
                      {phoneNumbers2.map((phoneNumber, index)=>( 
                        <div key={index}>
                          <Field name={`phoneNumbers2[${index}]`}/>
                          {
                            index>0 && <button type='button' onClick={()=> remove(index)}>-</button>
                          }
                          
                          <button type='button' onClick={()=> push('')}>+</button>
                        </div>
                      ))}
                    </div>
                  )
                }
              }
            </FieldArray>
            </div> 
           
          <button>Submit</button>
        
        </Form>
        
    </Formik>
  )
}

export default YouTubeForm