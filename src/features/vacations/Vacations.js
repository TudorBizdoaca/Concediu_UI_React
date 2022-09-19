import React  from 'react'
import { Typography } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import Container from '@material-ui/core/Container';
import VacationsGrid from './VacationsGrid';




function Vacations() {
  const addToast = useToast()
  addToast('Vacations', 'success')
  return (

        <Container maxWidth="flex">
        <Typography component="div" style={{
          backgroundColor: 'White', height: '150vh' 
        }}>
          <content>
            <VacationsGrid>
          
            </VacationsGrid>
          </content>
        </Typography>
        </Container>
      );
      }
    
  

export default Vacations



