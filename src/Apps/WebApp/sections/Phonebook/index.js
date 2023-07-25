import { useState, useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import ContactsList from "../ContactsList"

import { Root, SearchBar, StyledButton } from "./component"

import BackArrowIcon from '../../components/icons/BackArrow.icon'
import SearchIcon from '../../components/icons/Search.icon'

import AddNewContactForm from "../../components/AddNewContactForm"

import { setOpenPhonebook } from '../../store/reducer/contacts'





export default function (props) {
  const addContactBtnDom = useRef(null)
  const cancelAddContactBtnDom = useRef(null)
  const { openPhonebook } = useSelector(state => state.contacts)
  const [showAddContact, setShowAddContact] = useState(false)
  const dispatch = useDispatch()
  

  const addContactBtnClickHandler = () => {
    // addContactBtnDom.current.classList.add('hide')
    // cancelAddContactBtnDom.current.classList.remove('hide')
    setShowAddContact(true)
  }
  const cancelAddContactBtnClickHandler = () => {
    // cancelAddContactBtnDom.current.classList.add('hide')
    // addContactBtnDom.current.classList.remove('hide')
    setShowAddContact(false)
  }


  useEffect(() => {
    if (showAddContact) {
      addContactBtnDom.current.classList.add('hide')
      cancelAddContactBtnDom.current.classList.remove('hide')
    } else {
      cancelAddContactBtnDom.current.classList.add('hide')
      addContactBtnDom.current.classList.remove('hide')
    }
  }, [showAddContact])

  return (
    <Root
      style={props.style}
      className={`${openPhonebook ? 'open' : ''}`}
    >
      <Grid
        className='grid-stack'
      >

        <Grid item className='row row-1'>
          
          <Stack 
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            className='nav'
          >
            
            <Box 
              className="iconButton"
              onClick={() => dispatch(setOpenPhonebook(false))}
            >
              <BackArrowIcon
                color='#6E01CE'
                style={{
                  marginRight: 2
                }}
                  />
            </Box>
             
            <StyledButton
              ref={addContactBtnDom}
              onClick={addContactBtnClickHandler}
            >
              <Typography className="label">
                +Add
              </Typography>
            </StyledButton>

            <StyledButton
              ref={cancelAddContactBtnDom}
              onClick={cancelAddContactBtnClickHandler}
              className="hide"
            >
              <Typography className="label">
                Cancel
              </Typography>
            </StyledButton>

          </Stack>

        </Grid>

        <Grid item className='row row-2'>
          <Box className="wrapper">
            
            {!showAddContact ? 
              <SearchBar>
                <SearchIcon />
                <Box className="input">
                  <Typography className="label">
                    Search Contacts
                  </Typography>
                </Box>
              </SearchBar> : ''}

            {showAddContact ? <AddNewContactForm renderHandler={setShowAddContact} /> : ''}

          </Box>
        </Grid>

        <Grid item  className='row row-3'>
          <Box className="wrapper">

            <ContactsList/>

          </Box>
        </Grid>

      </Grid>
    </Root>
  )
}