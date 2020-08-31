import styled from 'styled-components'

export default {
  Container: styled.div`
    display: grid;
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 814px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1220px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1600px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  `,
}
