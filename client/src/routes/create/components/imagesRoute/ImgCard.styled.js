import styled from 'styled-components'

export default {
  Border: styled.div`
    border: #0d0c22 solid 1px;
    margin: 5px;
    border-radius: 10px;
    overflow: hidden;
    height: fit-content;
  `,
  DeleteContainer: styled.div`
    cursor: pointer;
    color: #0d0c22;
    &&:hover {
      color: #f4446a;
    }
  `,
  EditContainer: styled.div`
    cursor: pointer;
    color: #0d0c22;
    &&:hover {
      color: #3666a0;
    }
  `,
}
