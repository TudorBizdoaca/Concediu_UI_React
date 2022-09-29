const employeeMiniCardStyle = () => {
  return {
    card: {
      padding: '16px',
      backgroundColor: '#ffffff',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.12)',
      borderRadius: '14px',
      display: 'flex'
    },
    avatar: {
      width: '74px',
      height: '74px',
      borderRadius: '14px'
    },
    user: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: '24px'
    },
    firstName: {
      fontWeight: '700',
      fontSize: '22px',
      lineHeight: '38px',
      color: '#202020'
    },
    lastName: { fontWeight: '500', fontSize: '20px', lineHeight: '38px' }
  }
}

export default employeeMiniCardStyle
