import styled from 'styled-components'

export default {
  text: styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    @media (max-width: 664px) {
      text-align: center;
    }
    text-align: left;
  `,

  div: styled.div`
    height: 80%;
    background-color: #f9f8fd;
  `,

  flex: styled.div`
    @media (max-width: 664px) {
      display: inline-block;
    }
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  `,

  flexChild: styled.div`
    display: flex;
    justify-content: center;
  `,

  Container: styled.div`
    @media (max-width: 375px) {
      margin: 0 5px;
    }
    @media (min-width: 375px) {
      margin: 0 10px;
    }
    @media (min-width: 425px) {
      margin: 0 20px;
    }
    @media (min-width: 630px) {
      margin: 0 40px;
    }
    max-width: 1000px;
    justify-content: center;
  `,
}
