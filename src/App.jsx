import './App.css'
import Profile from '../src/profile/profile'
import Img1 from '../src/images/email.png'
import styled from 'styled-components'

const Photo = styled.img`
    width: 120px;
    height: 120px;
    
`;

const MydivProfile = styled.div`
display: grid;
grid-template-columns: 1fr 1fr ;
background-color : violet
`

function toDo(name) {
  alert(name)
}

function App() {
  

  return (
    <MydivProfile>
      <Profile fullName="11111" bio="BIOGRAPHIE" profession="Ingenieur" handleName={toDo}><Photo src={Img1}/></Profile>
      <Profile fullName="Amina" bio="BIOGRAPHIE" profession="TS"  handleName={toDo}><Photo src={Img1}/></Profile>
      <Profile fullName="Khadidja" bio="BIOGRAPHIE" profession="Ingenieur" handleName={toDo}><Photo src={Img1}/></Profile>
      <Profile fullName="Amina" bio="BIOGRAPHIE" profession="TS"  handleName={toDo}><Photo src={Img1}/></Profile>
      <Profile/>
      <Profile fullName={toDo}/>
  </MydivProfile>
  )
}

export default App
