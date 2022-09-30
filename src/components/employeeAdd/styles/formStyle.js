const formStyle = theme => {
  return {
    card: {
      background: 'rgba(0, 0, 0, 0.15)',
      borderRadius: '10px',
      padding: '2%',
      margin: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    title: {
      fontFamily: 'Cairo',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '34px',
      lineHeight: '64px',
      marginBottom: '40px',
      borderRadius: '14px',
      color: '#202020',
      height: '64px',
      width: '251px'
    },
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
    textfield: {
      '& .MuiOutlinedInput-root': {
        borderRadius: '14px',
        height: '40px',
        width: '250px',
        '& input[type=number]::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          margin: 0
        },
        '& input[type=number]::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          margin: 0
        }
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
    },
    errorP: {
      color: 'red'
    },
    header: {
      display: 'flex',
      lineHeight: '24px'
    }
  }
}

export default formStyle
