import styled from 'styled-components'

export default {
  Container: styled.div`
    @media (max-width: 520px) {
      display: inline-block;
      text-align: center;
    }
    display: flex;
    justify-content: center;
    margin: auto;
  `,

  Description: styled.span`
    font-size: 18px;
    font-family: 'Cardo', serif;
  `,
  DescriptionContainer: styled.div`
    margin: 0 10px;
  `,
  DescriptionTitleContainer: styled.div`
    margin: 10px 0;
  `,
  DescriptionTitle: styled.div`
    font-size: 22px;
    font-family: 'cardo', serif;
  `,
}
