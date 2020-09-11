import styled from 'styled-components'

export default {
  ImgCardContainer: styled.div`
    min-height: 160px;
    max-width: 800px;
    display: flex;
    margin: auto;
    border: 3px solid rgb(234, 76, 137);
    border-radius: 10px;
    overflow: hidden;
    flex-wrap: wrap;
    justify-content: center;
  `,
  SelecFileBtn: styled.label`
    border: 1px solid #0d0c22;
    margin-left: 10px;
    height: 30px;
    width: 30px;
    border-radius: 100px;
    background-color: white;
    padding: 25px 19px;
    cursor: pointer;
    @media (min-width: 678px) {
      &:hover {
        background-color: rgba(51, 51, 51, 0.05);
        outline: none;
      }
    }
    &:active {
      background-color: rgba(51, 51, 51, 0.05);
      height: 300px;
      outline: none;
    }
  `,
  SelecFileBtnContainer: styled.div`
    max-width: 800px;
    margin: 40px auto 35px auto;
  `,
  ArrowContainer: styled.div`
    cursor: pointer;
  `,
}
