import styled from 'styled-components'

export default {
  ImgCardContainer: styled.div`
    max-width: 800px;
    display: flex;
    margin: auto;
    border: 3px solid green;
    border-radius: 10px;
    overflow: hidden;
    flex-wrap: wrap;
  `,
  SelecFileBtn: styled.label`
    border-radius: 10px;
    background-color: red;
    padding: 5px 15px;
    cursor: pointer;
    &&:hover {
      background-color: white;
    }
  `,
  SelecFileBtnContainer: styled.div`
    margin-left: 8%;
    margin-bottom: 10px;
    margin-top: 10px;
  `,
}
