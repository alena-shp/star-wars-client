import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Input } from '@material-ui/core'
import { searchDataRequest, searchDataClear } from 'store/actions'
import styles from './styles.module.scss'

const InputSearch = () => {
  const [valueSearch, setValueSearch] = useState('')
  const searchData = useSelector(state => state.searchData)
  const history = useHistory()

  const dispatch = useDispatch()

  const onChangeValueSearch = event => {
    const currentValue = event.target.value
    setValueSearch(currentValue)
  }

  useEffect(() => {
    history.push('/')
  }, [searchData])

  const onSubmitValue = e => {
    e.preventDefault()
    if (valueSearch === '') {
      dispatch(searchDataClear())
    } else {
      dispatch(searchDataRequest(valueSearch))
    }
  }

  return (
    <form className={styles.inputWrap} onSubmit={onSubmitValue}>
      <Input
        color="primary"
        placeholder="enter your search term..."
        value={valueSearch}
        type="text"
        onChange={onChangeValueSearch}
        className={styles.input}
      />
    </form>
  )
}

export default InputSearch
