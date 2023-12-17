import styled from 'styled-components';

export const UserBtn = styled.button`
  width: 60px;
  padding: 5px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 1px 7px grey;
  background-color: navy;
  color: white;
  margin-right: 4px;

  &:hover,
  &:focus {
    color: white;
    background-color: black;
    cursor: pointer;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  color: darkblue;
  font-size: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
