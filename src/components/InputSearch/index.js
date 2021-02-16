import React, { useState } from 'react'
import { Input } from '@material-ui/core'

import styles from './styles.module.scss'

const InputSearch = () => {
  const [valueSearch, setValueSearch] = useState('')

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
    </div>
  )
}

export default InputSearch
