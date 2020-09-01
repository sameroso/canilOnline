import React from 'react'

import List from './components/List'
import dog from '../../assets/dog.png'
import s from './Home.styled'

export default function Home() {
  return (
    <>
      <s.div>
        <s.flex>
          <s.Container />
          <s.flexChild>
            <img src={dog} height="50%" width="250px" />
          </s.flexChild>
          <s.flexChild>
            <s.text>
              Lorem ipsum dolor sit amet, consectetur adipiscing lit.
            </s.text>
          </s.flexChild>
          <s.Container />
        </s.flex>
      </s.div>
      <div>
        <List />
      </div>
    </>
  )
}
