import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
  position: absolute;
  display: block;
  margin-top: 50px;
  margin-left: 50px;
  letter-spacing: 3px;
  word-spacing: -2px;
  border: 1px solid #180101;
  border-radius: 1%;
`;

export const AlunosContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }
  div + div {
    border-top: 1px solid #fef;
  }
`;
export const ProfilePicture = styled.div`
  width: 185px;
  height: 185px;
  margin-left: -180px;
  position: fixed;
  border-radius: 60%;
  border: 3px;
  img {
   width: 180px;
   height: 180px;
   border-radius: 50%;
   border: 3px solid #180101;
  }
  .edit-icon {
  position: absolute;
  right: 70px;
  cursor: pointer;
  padding:6px;
  opacity: 0.6;
  
}

.delete-icon{
  position: absolute;
  margin-top: 130px;
  right: 70px;
  cursor: pointer;
  padding: 6px;
  opacity: 0.6;
}
`;
export const NovoAluno = styled(Link)`
  display: block;
  padding: 20px 0 10px 0;
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 10px;
  }
`;


export const Title = styled.h1`
  padding: 0;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: rgb(235, 87, 29);
  margin-top: -280px;
  margin-left: 150px;

`;