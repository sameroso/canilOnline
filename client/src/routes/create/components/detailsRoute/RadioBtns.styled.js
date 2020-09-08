import styled from 'styled-components'

export default {
  RadioBtnsContainer: styled.div`
    @media (max-width: 700px) {
      flex-direction: column;
      align-items: flex-start;
      display: flex;
      justify-content: space-between;
      margin: auto;
    }
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: auto;
  `,
}
