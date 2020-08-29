import React from 'react'

import Header from './components/Header'
import List from './components/List'
import dog from '../../assets/dog.png'
import s from './Home.styled'

export default function Home() {
  return (
    <>
      <s.div>
        <Header />
        <s.flex>
          <s.Container />
          <s.text style={{ fontFamily: "'Roboto', sans-serif", fontSize: 40 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing lit.
          </s.text>
          <s.image src={dog} height="50%" width="250px" />
          <s.Container />
        </s.flex>
      </s.div>
      <List />
    </>
  )
}
