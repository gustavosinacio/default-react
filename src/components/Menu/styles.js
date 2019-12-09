import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #fff;
  padding: 30px 0;
  width: 300px;
  height: 100%;
`;

export const Header = styled.div`
  width: 100%;

  nav {
    /* background: #ff9; */
    display: flex;
    align-items: center;
    margin: 20px 30px;

    a {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        height: 62px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 50%;
      }

      strong {
        margin-left: 20px;
      }
    }
  }
`;
