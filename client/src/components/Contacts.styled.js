import styled from 'styled-components'

export default {
  Container: styled.div`
    display: grid;
    grid-template-columns: ${props => (props.isDetailPage ? '1fr' : '1fr 1fr')};
    margin: 10px 0px;
  `,
  Flex: styled.div`
    @media (max-width: 520px) {
      margin: ${props => (props.isDetailPage ? '6px auto' : '0')};
    }
    display: flex;
    align-items: center;
    margin: ${props => (props.isDetailPage ? '6px 0' : '5px 0')};
  `,
  Font: styled.span`
    font-size: ${props => (props.isDetailPage ? '18px' : '13px')};
  `,
}
