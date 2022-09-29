import { alpha } from '@material-ui/core'

const employeeStyle = () => {
  return {
    page: {
      padding: '40px',
      backgroundColor: '#ffffff',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
      borderRadius: '14px'
    },
    contactInfo: {
      marginTop: '14px',
      marginBottom: '24px'
    },
    contactItem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
    contactIcon: {
      marginLeft: '24px',
      width: '42px',
      height: '42px'
    },
    contactInputTop: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '24px',
      width: '100%'
    },
    contactInput: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    },
    contactText: {
      fontWeight: '600',
      fontSize: '18px',
      lineHeight: '19px'
      // color: '#C7C7C7'
    },
    textField: {
      marginTop: '8px',
      borderRadius: '14px',
      height: '40px',
      width: '100%'
    },
    button: {
      margin: '14px 0',
      backgroundColor: '#DFA625',
      color: 'white',
      fontWeight: 700,
      lineHeight: '32px',
      width: '100%',
      borderRadius: '14px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: alpha('#DFA625', 0.7),
        boxShadow: 'none'
      }
    },
    icon: {
      width: '24px',
      height: '24px'
    },
    readOnly: {
      color: '#888',
      fontWeight: 700
    }
  }
}

export default employeeStyle
