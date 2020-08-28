import styled from 'styled-components'

export default {
  div: styled.div`
    background-color: #f9f8fd;
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
    } ;
  `,
  Menu: styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
}
