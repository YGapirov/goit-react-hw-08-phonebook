import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: whitesmoke;
  border: 2px solid darkblue;
  border-radius: 4px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: grey;
  font-size: 16px;
`;

export const Input = styled.input`
  color: #171718;
  padding: 4px 12px;
  font: inherit;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 70px;
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
