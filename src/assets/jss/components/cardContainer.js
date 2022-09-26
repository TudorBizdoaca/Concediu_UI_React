const cardContainer = theme => {
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
    }
  }
}
export default cardContainer
