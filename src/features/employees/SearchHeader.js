import React from 'react'
import iconSearch from 'assets/img/iconSearch.svg'
import iconAddUser from 'assets/img/iconAddUser.svg'
import PropTypes from 'prop-types'
import { Button, InputBase } from '@material-ui/core'
import { useHistory } from 'react-router'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import searchHeaderStyle from 'features/employees/styles/searchHeaderStyle'

const useStyles = makeStyles(searchHeaderStyle)

function SearchHeader({ searchHandler, searchInputRef }) {
  const { t } = useTranslation()
  const classes = useStyles()
  const history = useHistory()

  const handleClick = () => {
    history.push({ pathname: '/add-employee' })
  }

  return (
    <div className={classes.pageHeader}>
      <h1 className={classes.title}>Angajati</h1>
      <div className={classes.headerRight}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <img className={classes.icon} alt='iconSearch' src={iconSearch} />
          </div>
          <InputBase
            placeholder='Search…'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ 'aria-label': 'search' }}
            inputRef={searchInputRef}
            onChange={searchHandler}
          />
        </div>
        <Button
          className={classes.button}
          variant='contained'
          size='large'
          startIcon={<img className={classes.icon} alt='iconAddUser' src={iconAddUser} />}
          onClick={handleClick}
        >
          Adauga angajat
        </Button>
      </div>
    </div>
  )
}

SearchHeader.propTypes = {
  searchHandler: PropTypes.func.isRequired,
  searchInputRef: PropTypes.object.isRequired
}

export default SearchHeader
