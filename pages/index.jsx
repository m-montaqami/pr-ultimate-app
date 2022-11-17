import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export default function Home() {
  return (
    <div
      css={css`
        background-color: hotpink;
        &:hover {
          color: red;
        }
      `}
    >
      <main>
        <p>this is test</p>
      </main>
    </div>
  )
}
