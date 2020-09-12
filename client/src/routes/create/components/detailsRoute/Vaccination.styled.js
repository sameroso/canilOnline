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
    padding: 10px 0;
  `,
  VaccineTableTitle: styled.span`
    color: rgba(0, 0, 0, 0.54);
    padding: 0;
    font-size: 1rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.00938em;
  `,
}
