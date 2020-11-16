import React from 'react'

import logo from 'src/logo.svg'
import * as S from 'src/components/App/styles'

export const App: React.FC = () => (
  <S.Wrapper>
    <S.Header>
      <S.Logo src={logo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <S.PageLink to="login">Go to Login</S.PageLink>
    </S.Header>
  </S.Wrapper>
)
