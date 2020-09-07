import styled from 'styled-components'

export default {
  ImgCardContainer: styled.div`
    min-height: 160px;
    max-width: 800px;
    display: flex;
    margin: auto;
    border: 3px solid green;
    border-radius: 10px;
    overflow: hidden;
    flex-wrap: wrap;
    justify-content: center;
  `,
  SelecFileBtn: styled.label`
    border-radius: 10px;
    background-color: red;
    padding: 5px 15px;
    cursor: pointer;
    @media (min-width: 678px) {
      &:hover {
        background-color: white;
        outline: none;
      }
    }
    &:active {
      background-color: green;
      height: 300px;
      outline: none;
    }
  `,
  SelecFileBtnContainer: styled.div`
    margin-left: 8%;
    margin-bottom: 10px;
    margin-top: 10px;
  `,
}
