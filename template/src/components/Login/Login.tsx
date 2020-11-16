import React from 'react'

import logo from 'src/logo.svg'
import * as S from 'src/components/Login/styles'

export const Login: React.FC = () => (
  <S.Wrapper>
    <S.Header>
      <S.Logo src={logo} alt="logo" />
      <p>
        Edit <code>src/Login.tsx</code> and save to reload.
      </p>
      <S.PageLink to="/">Go to Home</S.PageLink>
    </S.Header>
  </S.Wrapper>
)
