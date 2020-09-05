import styled from 'styled-components'

export default {
  BarContainer: styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
  `,
  Info: styled.div`
    @media (max-width: 430px) {
      display: block;
      text-align: center;
    }
    @media (min-width: 522px) {
      display: block;
      text-align: center;
    }
    @media (min-width: 653px) {
      display: flex;
      justify-content: space-between;
      height: fit-content;
    }
  `,
  Margin: styled.div`
    margin: 20px 0;
  `,
}
