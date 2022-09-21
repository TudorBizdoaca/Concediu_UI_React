import styles from 'assets/jss/styles'

const employeesGridStyle = theme => {
  return {
    cardsGrid: {
      display: 'flex',
      justifyContent: 'space-around'
    },
    pagination: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '40px',
      marginLeft: '24px',
      marginRight: '24px',
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
        '&.Mui-selected': {
          background: '#6418c3',
          color: 'white'
        }
      }
    }
  }
}

export default employeesGridStyle
