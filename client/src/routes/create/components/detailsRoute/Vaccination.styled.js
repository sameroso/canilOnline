import styled from 'styled-components'

export default {
  Container: styled.div`
    border: 1px solid black;
    width: 90%;
    margin: auto;
    max-width: 600px;
  `,
  Row: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `,
  Col: styled.div`
    margin: auto;
  `,
}
