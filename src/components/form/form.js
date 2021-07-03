import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';
import  { TextField, Button }  from '@material-ui/core';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
const useStyles = makeStyles(theme=> ({
    form: {
        marginTop: theme.spacing(2)

    },
    container: {
display: "flex",
flexDirection: "row",
justifyContent: "space-between",
margin: 0,
[theme.breakpoints.down("md")]: {
    flexDirection: "column",
},
    },
    width: {
        width: "49%",
         [theme.breakpoints.down("md")]: {
            width: "100%",
        },

    },
    textField : {
        display: "block",
        marginLeft: 0,
        marginRight: 0,
    },
    textArea: {
        width: "100%",
    },
   

}))



const MMForm  = () => {
  
  const classes =  useStyles()
  const initialValues={
      name: '',
      email: '',
      message: ''

  }

  
  const validationSchema=Yup.object().shape({
      name: Yup.string('Please provide your name').max(100).required("Required"),
      email: Yup.string().email('Please enter valid email').required("Required"),
      message: Yup.string().min(10).required("Required")
  })
  const onSubmit = (values, props) => {

    emailjs.send('default_service',  'template_jdfpewg', values,'user_xfR9HCBL70ako5sXrSOX4')
    .then(function(response) {
      alert(`thank you! We'll be in touch soon!`);
    }, function(error) {
       alert(`Unable to send the email. Please try later`);
    });

    
      setTimeout(() => {
        props.resetForm()
   props.setSubmitting(false)

      }, 2000)
      


  }
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} 
        
        validationSchema={validationSchema}>
        {(props)=> (
          
            <Form autoComplete="off" className={classes.form}>
           
        <div className={classes.container}>
        
            <div className={classes.width}>
                <Field as={TextField}  id="form-name" required label="Name" variant="outlined" margin="normal" name="name"  className={classes.textField} fullWidth  helperText={<ErrorMessage name="name"/>}/>
            </div>
       
    <div className={classes.width}>
        
                <Field as={TextField}   id="form-email" label="Email" required variant="outlined"name="email" margin="normal" className={classes.textField } fullWidth  helperText={<ErrorMessage  name="email" />}/>
    </div>
        </div>
        <Field   as={TextField} id="form-message" className={classes.textArea} label="Message" variant="outlined" margin="normal" name="message" required
        color="primary"
         multiline
        rows={4} helperText={<ErrorMessage name="message" />}/>
       
        
        <Button  disableElevation  type="submit" size="large" variant="contained" color="primary" disabled={props.isSubmitting}>Submit</Button>
      </Form>

        )

        }
        </Formik>
        
    )
}

export default MMForm