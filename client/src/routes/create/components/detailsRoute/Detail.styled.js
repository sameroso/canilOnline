import styled from 'styled-components'

export default {
  Container: styled.div`
    display: flex;
    max-width: 900px;
    justify-content: center;
    align-items: center;
    margin: auto;
  `,
  SubContainer: styled.div`
    width: 100%;
  `,
  TextAreaContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `,
  FormContainer: styled.div`
    margin: 20px;
    display: flex;
  `,
  Description: styled.span`
    color: rgba(0, 0, 0, 0.54);
    padding: 0;
    font-size: 1rem;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.00938em;
  `,
  InputsContainer: styled.div`
    @media (max-width: 598px) {
      flex-direction: column;
    }
    display: flex;
    justify-content: center;
  `,
}
