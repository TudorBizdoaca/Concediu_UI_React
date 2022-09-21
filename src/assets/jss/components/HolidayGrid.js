const gridStyle = theme => {
  return {
    container: {
      padding: '2px'
    },
    card: {
      transformStyle: 'preserve-3d',
      boxShadow: '0 8px 8px 0 rgba(0,0,0,0.2)',
      background: 'rgb(254, 239, 198)',
      transition: '0.3s',
      margin: '10px 0px',
      borderRadius: '10px',
      padding: '2%',
      '&:hover': {
        boxShadow: '0 8px 26px 0 rgba(0,0,0,0.2)',
        cursor: 'pointer',
        transform: 'rotateY(180deg)',
        transition: 'transform 0.5s'
      }
    },
    lblRespingere: {
      backfaceVisibility: 'hidden',
      transform: 'rotateY(180deg)'
    },
    motivRespingere: {
      backfaceVisibility: 'hidden',
      transform: 'rotateY(180deg)'
    },
    lblTip: {
      fontSize: '1.2rem',
      backfaceVisibility: 'hidden'
    },
    tipConcediu: {
      fontSize: '1.2rem',
      backfaceVisibility: 'hidden'
    },
    lblInlocuitor: {
      fontSize: '1.2rem',
      backfaceVisibility: 'hidden'
    },
    inlocuitor: {
      fontSize: '1.2rem',
      // gridColumn: 2,
      // gridRow: 2,
      backfaceVisibility: 'hidden'
    },
    lblPerioada: {
      fontSize: '1.2rem',
      backfaceVisibility: 'hidden'
    },
    perioada: {
      fontSize: '1.2rem',
      backfaceVisibility: 'hidden'
    },
    lblStare: {
      backfaceVisibility: 'hidden',
      fontSize: '1.2rem'
    },
    stare: {
      fontSize: '1.2rem',
      backfaceVisibility: 'hidden'
    }
  }
}

export default gridStyle
