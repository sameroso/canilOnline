import styled from 'styled-components'

export default {
  Container: styled.div`
    display: grid;
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 710px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  `,
}
