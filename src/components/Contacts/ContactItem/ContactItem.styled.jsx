import styled from '@emotion/styled';

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  padding: 10px 0;
`;

export const Text = styled.p`
  font-size: 22px;
  font-family: 'Roboto', sans-serif;
  text-transform: capitalize;
`;

export const Button = styled.button`
  padding: 5px;
  border: 1px solid #000000;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #00ff00;
  }
`;
