import styled from "styled-components";

export const PageArea = styled.div`
   form {
    background-color: lightgreen;
    border-radius: 15px;
    padding: 10px;
    box-shadow: 0px 0px 5px gold;

    .area {
      display: flex;
      align-items: center;
      padding: 10px;
      max-width: 700px;

      .area--title {
        width: 500px;
        text-align: right;
        padding-right: 20px;
        font-weight: bold;
        font-size: 24px;
      }
      .area--input {
        flex: 3;

        input {
          width: 100%;
          font-size: 16px;
          padding: 10px;
          border: 5px solid plum;
          border-radius: 10px;
          outline: 0;
          transition: all ease 0.4s;

          &:focus {
            border: 3px solid greenyellow;
            color: brown;
          }
        }
        button {
          background-color: blueviolet;
          border: 0;
          outline: 0;
          padding: 5px 10px;
          border-radius: 10px;
          color: maroon;
          font-size: 20px;
          cursor: pointer;

          &:hover {
            background-color: lawngreen;
          }
        }
      }
    }
   }
`