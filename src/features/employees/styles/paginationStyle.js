import styles from 'assets/jss/styles'

const paginationStyle = theme => {
  return {
    grid: {
      display: 'flex',
      justifyContent: 'space-around'
    },
    pagination: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '40px',
      marginLeft: '14px',
      marginRight: '14px',
      '& span': {
        fontWeight: 700,
        color: 'black'
      }
    },
    details: {
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '22px'
    },
    ul: {
      '& .MuiPaginationItem-root': {
        color: '#6418c3',
        borderRadius: '10px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
        '&.Mui-selected': {
          background: '#6418c3',
          color: 'white'
        }
      }
    }
  }
}

export default paginationStyle
