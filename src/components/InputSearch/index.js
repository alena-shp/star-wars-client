import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import useDebounce from 'starter/utils'
import { Input } from '@material-ui/core'
import { searchDataRequest, searchDataClear } from 'store/actions'
import styles from './styles.module.scss'

const InputSearch = () => {
  const [valueSearch, setValueSearch] = useState('')
  const searchData = useSelector(state => state.searchData)
  const history = useHistory()
  const dispatch = useDispatch()

  const debouncedSearchTerm = useDebounce(valueSearch, 1000)

  useEffect(() => {
    history.push('/')
  }, [searchData])

  useEffect(() => {
    if (valueSearch === '') {
      dispatch(searchDataClear())
    }
    if (debouncedSearchTerm && valueSearch.length > 2) {
      dispatch(searchDataRequest(debouncedSearchTerm))
    }
  }, [debouncedSearchTerm])

  return (
    <div className={styles.inputWrap}>
      <Input
        color="primary"
        placeholder="enter your search term..."
        value={valueSearch}
        type="text"
        onChange={e => setValueSearch(e.target.value)}
        className={styles.input}
      />
    </div>
  )
}

export default InputSearch
