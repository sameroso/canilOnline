import styled from 'styled-components'

export default {
  text: styled.span``,
  image: styled.img``,
  div: styled.div`
    height: 80%;
    background-color: #f9f8fd;
  `,
  flex: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  `,
}
