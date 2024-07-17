import * as React from "react";
import Grid from "@mui/material/Grid";
import { Container, Typography,TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import { Email } from "@mui/icons-material";
import Button from '@mui/material/Button';
import * as Yup from 'yup';


const ContactUs = () => {
  const [inputNameValue,setNameValue]=React.useState('');
  const [inputEmailValue,setEmailValue]=React.useState('');
  const [textareaValue,setTextAreaValue]=React.useState('');
  //validation
  const formik=useFormik({
    initialValues:{
      Email:'',
      Name:'',
      Message:''
    },
    validationSchema:Yup.object({
      Name:Yup.string().required('Required'),
      Email:Yup.string().email('Invalid Email Address').required('Required'),
      Message:Yup.string().required('Required')
    }),
    onSubmit:(values)=>{
      console.log(values);
    },
  });






  const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 0),
  }));
  const ProfileImg = styled("img")({
    borderRadius: "100%",
    margin: "1%",
    width: "30%",
    border: "solid",
  });
  const Img=styled('img')({
    width:'100%',
    height:'auto',
    objectFit:'fill',
    itemAlign:'right',
    justifyContent:'center',
    margin:'auto'
  });
  const Input=styled("input")({
    margin:'1%',
    display:'block',
    width:'100%'
  });
  const TextArea=styled("textarea")({
    margin:'1%',
    display:'block',
    width:'100%'
  });
  



  return (
    <Container maxWidth={false} sx={{
      maxWidth: '1280'
    }}>
      <Section id="ContactUs">
        <Grid container style={{
          padding:'0'
        }}>
          <Grid item xs={12} md={12} style={{marginBottom:'3%'}}>
          <Typography variant="h3">Contact Us</Typography>

          </Grid>
          
         
        </Grid>
        <Grid container rowSpacing={4} >
          <form onSubmit={formik.handleSubmit}>
            <Grid item xs={12} md={4} display={"flex"} style={{
              //border:'solid',
              justifyContent:'center',
              alignItems:'center'
              
              }}>
              <Img src="./contact.png" maxWidth={"600px"}  style={{
                
              }}/>
            </Grid>
            
            <Grid item xs={12} md={6} >
              
              <label>
              <TextField id="outlined-basic" label="Name" variant="outlined" color="success" style={{width:'100%',margin:'1%'}}
                name="Name"{...formik.getFieldProps('Name')}
              />
              
              </label>
              {formik.touched.Name && formik.errors.Name ?(
                <div style={{color:'red'}}>{formik.errors.Name}</div>
              ):null}
              

              <label>
              <TextField id="outlined-basic" label="Email Address" variant="outlined" color="success" style={{width:'100%',margin:'1%'}}
              name="Email" {...formik.getFieldProps('Email')}
              // value={inputEmailValue}
              placeholder="Email"
              // onChange={(e)=>{
              //   setEmailValue(e.target.value);
              // }}
              />
              </label>
              {formik.touched.Email && formik.errors.Email?(
                <div style={{color:'red'}}>{formik.errors.Email}</div>
              ):null}
              
              <TextField id="outlined-basic" label="Message" variant="outlined" color="success" style={{width:'100%',margin:'1%'}}
                //value={textareaValue}
                multiline
                rows={4}
                name="Message" {...formik.getFieldProps('Message')}
                placeholder="Message"
                />
                {formik.touched.Message && formik.errors.Message?(
                <div style={{color:'red'}}>{formik.errors.Message}</div>
              ):null}
              
              <Button variant="contained" color="success">
                    SUBMIT
              </Button>
              
              <Typography>greenleaf@gmail.com</Typography>
              <Typography>No.23/A, Main Street, Rajagiriya</Typography>
              <Typography>0115473210</Typography>
            </Grid>
            </form>
            </Grid>
      </Section>
    </Container>
  );
};
export default ContactUs;
