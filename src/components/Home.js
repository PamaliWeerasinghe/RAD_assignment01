import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


export default function Home() {
    const Item = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        //border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
        //padding: theme.spacing(1),
        //borderRadius: '4px',
        textAlign: 'center',
      }));


  return (
    <div style={{ 
        
        width: '100%',

     }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container >
            <Grid sx={{
                bgcolor:'success.main',
                width:'100%',
                display:'flex',
                flexDirection:'row'
            }}>
                <Grid sx={{ bgcolor: 'primary.main',display:'flex',flex:'1' }}>
                Welcome to GreenLeaf Gardens, your go-to destination for 
                all things green and beautiful!
                </Grid>
                <Grid sx={{ bgcolor: 'secondary.main' ,display:'flex',flex:'1'}}>
                    <img src='./plant.png'/>
                </Grid>

            </Grid>
        </Grid>
      </Box>
    </div>
  );
}
