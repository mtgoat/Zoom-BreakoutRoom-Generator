import React, { useContext, useEffect, useState} from "react";
import { Button, Modal } from "react-bootstrap";
import { ThemeContext } from "./ThemeProvider";
import "./Theme.css"



export const ThemeGenerator = (props) => {
    function refreshPage() {
        window.location.reload(false);
      }
    const [show, setShow] = useState(false);
    
    const { themes, getThemes } = useContext(ThemeContext)

    useEffect (() => {
     
        getThemes()
      
    }, []);

    console.log(themes)
    let unExthemes = themes.filter( t => t.experienced === false)
    console.log(unExthemes);

    const unExThLength = unExthemes.length

    console.log(unExThLength);
    
    const radomThemeId = Math.floor(Math.random() * unExThLength);
    
    const randomTheme = unExthemes.find (u => u.id === radomThemeId)

     console.log(randomTheme);

    
    // let randomNumArray = [ ]
    // let random1 = getRandomInt(1, 10)
    // let random2 = getRandomInt(1, 10)
    // let random3 = getRandomInt(1, 10)

    // randomNumArray.push(random1);
    // console.log(randomNumArray)
    // randomNumArray.push(random2);
    // console.log(randomNumArray)
    // randomNumArray.push(random3);
    // console.log(randomNumArray)
    
//     for(let i = 0; i < 3; i++){
//         if(randomNumArray.includes(randomNumArray[i])){
//             randomNumArray.splice(i,1)
//             randomNumArray.push(getRandomInt(1, 10))
//         }
//         return randomNumArray
   
//     }
    
//   console.log(randomNumArray)
        

//     

    

//     let NYlength = NotYet.length
//     console.log(NotYet, NYlength)



const handleShow = () =>  setShow(true);

const handleClose = () => setShow(false);

   return (
        <>
        <Button className="generate_button" onClick={handleShow}>Generate Theme
        </Button>
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Theme Title: {randomTheme.themeTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Theme info</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
       
    )
}