import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '@material-ui/core'
import { searchDataRequest } from 'store/actions'
import styles from './styles.module.scss'

const InputSearch = () => {
  const [valueSearch, setValueSearch] = useState('')

  const dispatch = useDispatch()

  const onChangeValueSearch = event => {
    const currentValue = event.target.value
    setValueSearch(currentValue)
  }

  return (
    <div className={styles.inputWrap}>
      <Input
        color="primary"
        placeholder="enter your search term..."
        value={valueSearch}
        type="text"
        onChange={onChangeValueSearch}
        className={styles.input}
      />
      <button onClick={() => dispatch(searchDataRequest(valueSearch))}>search</button>
    </div>
  )
}

export default InputSearch
