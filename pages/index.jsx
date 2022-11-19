import React, { use } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Header from '../components/Header/Header'
import useLocalStorage from '../Hooks/useLocalStorage'

export default function Home(probs) {
  const vars = useLocalStorage()
  console.log(vars)
  return (
    <div>
      <main>
        <Header />
      </main>
    </div>
  )
}
