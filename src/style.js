import styled from 'styled-components';

export const Container = styled.div`
  ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    justify-content: flex-start;

    li{
      width: calc(25% - 10px);
      background: #fff;
      margin: 5px;
      text-align: center;
      border-radius: 8px;
      padding: 15px;
      img{
        width: 150px;
      }
    }
  }
`;
