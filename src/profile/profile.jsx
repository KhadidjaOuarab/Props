import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
const CreateButton = styled.button`
padding : 10px 10px;
background-color: #2a0845;
border-radius: 30px;
border: none;
color: white;
font-size: 18px;
cursor: pointer;
width: 300px;
margin-top: 10px;

`;
const MydivProfile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border-style: solid;
border-width: thick;
padding : 20px;
background-color : white;
width : 350px;
height : 380px;
`

const MyP = styled.p`
font-family : arial;
font-size: 16px;
color : blue
`


function profile({fullName, bio, profession, children, handleName}) {

    const handleAlert = e =>{
        handleName(fullName)
    }
    return (
        <MydivProfile>
          <div> {children} </div>
           <MyP>{fullName}</MyP>
           <MyP>{bio}</MyP>
           <MyP>{profession}</MyP>
           <CreateButton type="submit" onClick={handleAlert}>User Profile</CreateButton>
        </MydivProfile>
    )
}

profile.defaultProps = {
    fullName : "default fullname" ,
    bio : "default bio" ,
    profession: "default profession" 
}
profile.propTypes = {
    fullName : PropTypes.string ,
    bio : PropTypes.string ,
    profession: PropTypes.string,
    handleName : PropTypes.func
    
}

export default profile
