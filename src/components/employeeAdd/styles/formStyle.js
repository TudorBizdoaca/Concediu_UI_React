import { labelStyle } from './mixins'

const formStyle = theme => {
  return {
    container: {
      boxShadow: '0 1px 28px rgba(0,0,0,0.12)',
      borderRadius: '14px',
      width: '800px',
      height: '820px',
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'center'
    },
    div: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'spaceBetween',
      width: '70%',
      height: '80%'
    },
    label: {
      padding: '5px',
      fontFamily: 'Open Sans',
      fontWeight: '700',
      fontStyle: 'normal',
      fontSize: '16px',
      lineHeight: '22px',
      color: '#C7C7C7',
      letterSpacing: '1px'
    },
    TNume: {
      '& .MuiOutlinedInput-root': {
        borderRadius: '14px',
        height: '40px',
        width: '250px'
      }
    },
    datepicker: {
      border: '1px solid #C7C7C7',
      borderRadius: '14px',
      display: 'flex',
      alignItems: 'center',

      height: '40px',
      width: '250px',
      margin: 0,
      '& .MuiIconButton-root': {
        color: '#6418C3'
      },
      '& .MuiInputBase-root': {
        paddingLeft: '3%'
      }
    },
    button: {
      width: '194px',
      height: '50px',
      backgroundColor: '#6418C3',
      borderRadius: '14px'
    }
  }
}

export default formStyle
