import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { Box, Container, Typography, Button, TextField, Grid } from '@mui/material';
import { styled, keyframes } from '@mui/system';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  animation: `${fadeIn} 1.5s ease-in-out`,
}));

const Img = styled('img')({
  width: '100%', // Adjusted for responsiveness
  height: 'auto',
  objectFit: 'fill',
  itemAlign: 'right',
  justifyContent: 'center',
  margin: 'auto',
  animation: `${fadeIn} 2s ease-in-out`,
});

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  message: yup.string().required('Message is required'),
});

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState('');

  useEffect(() => {
    const formData = { name, email, message };
    localStorage.setItem('contactForm', JSON.stringify(formData));
  }, [name, email, message]);

  const validateField = (name, value) => {
    try {
      yup.reach(schema, name).validateSync(value);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    } catch (error) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error.message }));
    }
  };

  const handleChange = (field, value) => {
    switch (field) {
      case 'name':
        setName(value);
        validateField(field, value);
        break;
      case 'email':
        setEmail(value);
        validateField(field, value);
        break;
      case 'message':
        setMessage(value);
        validateField(field, value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { name, email, message };
    schema.validate(formData, { abortEarly: false })
      .then(() => {
        console.log(formData);
        setSubmissionMessage('Your message has been sent successfully!');
        setErrors({});
      })
      .catch((validationErrors) => {
        const formattedErrors = {};
        validationErrors.inner.forEach((error) => {
          formattedErrors[error.path] = error.message;
        });
        setErrors(formattedErrors);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={2} sx={{ animation: `${slideIn} 1s ease-out` }}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => handleChange('name', e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
        />
      </Box>
      <Box mb={2} sx={{ animation: `${slideIn} 1.2s ease-out` }}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => handleChange('email', e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
      </Box>
      <Box mb={2} sx={{ animation: `${slideIn} 1.4s ease-out` }}>
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          value={message}
          onChange={(e) => handleChange('message', e.target.value)}
          error={!!errors.message}
          helperText={errors.message}
        />
      </Box>
      <Button type="submit" variant="contained" color="primary" sx={{ animation: `${slideIn} 1.6s ease-out` }}>
        Send
      </Button>
      {submissionMessage && (
        <Typography variant="body1" color="success.main" sx={{ animation: `${fadeIn} 1.8s ease-in-out` }}>
          {submissionMessage}
        </Typography>
      )}
    </form>
  );
};

const Contact = () => {
  return (
    <Container maxWidth={'false'} sx={{ maxWidth: 1280 }}>
      <Section id="contact">
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', animation: `${fadeIn} 1s ease-in-out` }}>
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5} display={'flex'}>
            <Img src="contact.png" alt="contactimg" sx={{ maxWidth: { xs: '300px', sm: '400px', md: '450px' } }} />
          </Grid>
          <Grid item xs={12} md={7}>
            <Box mr={4}>
              <Typography mb={4} variant="h6" gutterBottom sx={{ animation: `${fadeIn} 1.2s ease-in-out` }}>
                If you have any questions or inquiries, please feel free to reach out to us
              </Typography>
              <ContactForm />
              <Box mt={4} textAlign={{ xs: 'center', md: 'left' }}>
                <Typography variant="h6" mb={1} sx={{ fontWeight: 'bold', animation: `${fadeIn} 1.4s ease-in-out` }}>
                  For More Details
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', animation: `${fadeIn} 1.6s ease-in-out` }}>
                  Address: 36/A, Main Street, Rajagiriya
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', animation: `${fadeIn} 1.8s ease-in-out` }}>
                  Phone: 0112357410
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', animation: `${fadeIn} 2s ease-in-out` }}>
                  Email: greenleaf@gmail.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Section>
    </Container>
  );
};

export default Contact;
