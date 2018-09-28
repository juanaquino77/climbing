import styled from 'styled-components';

export const ItemSection = styled.div`
  margin: 1% 0;
`;
export const ItemDescription = styled.div`
  padding: 0 1%;
  margin-bottom: 2%;
`;
export const ItemDifficulty = styled.div`
  background: ${props => props.difficulty === "Hard" ? "#f6000091" : (props.difficulty === "Medium" ? "#a8ab0db8" : "#17c51787")};
  color: white;
  display: initial;
  padding: 0em 1em;
  border-radius: 3px;
`;
export const Button = styled.button`
  background: transparent;
  color: #5f8dbf;
  font-size: 0.8em;
  border: 1px solid #5f8dbf;
  text-transform: uppercase;
  width: 100%;
`;
export const TitleSection = styled.h1`
  font-size: 1em;
  /* padding-top: 3%; */
  /* text-align: center; */
`;
export const Img = styled.img`
  width: 100%;
  border-bottom: 1px solid #5f8dbf;  
`;
export const Row = styled.div`
  border-bottom: 1px solid #5f8dbf;
  padding: 5px 0;
  display: flex;
  margin: 2% 0;
`; 
export const Roww = styled.div`
  /* border-bottom: 1px solid #5f8dbf;
  padding: 5px 0;
  display: flex;
  margin: 2% 0; */
  padding: 1%;
  background-color: #ffffff1f;
  margin: 1%;
  display: flex;
`; 
