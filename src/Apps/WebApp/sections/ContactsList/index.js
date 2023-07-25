import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import { Typography } from "@mui/material"

import { Root } from "./component"

import ContactItem from "../../components/ContactItem"





export default function () {
  const { userData } = useSelector(state => state.user)
  const { contacts } = useSelector(state => state.contacts)
  const [contactsWithNoName, setContactsWithNoName] = useState(null)
  const [contactsAlphaSeperation, setCcontactsAlphaSeperation] = useState(null)


  const renderContactsHandler = () => {
    const ontactsMinusUserContactItem = contacts.filter(c => c.phone.number !== userData.phone.number)
    const contactsWithNoName = []
    const contactsWithName = ontactsMinusUserContactItem.filter((contact) => {
      let op = false
      if (contact.userAccExist) {
        op = true
      } else {
        contactsWithNoName.push(contact)
      }

      return op
    })

    contactsWithName.sort((a, b) => {
      if (a.user.name < b.user.name) {
        return -1
      }
      if (a.user.name > b.user.name) {
        return 1
      }
      return 0
    })

    contactsWithNoName.sort((a, b) => {
      if (a.phone.number < b.phone.number) {
        return -1
      }
      if (a.phone.number > b.phone.number) {
        return 1
      }
      return 0
    })

    const contactsAlphaSeperation = []
    if (contactsWithName.length > 0) {
      contactsWithName.forEach((contact, i) => {
        if (i === 0) contactsAlphaSeperation.push({ component: 'alphaSeperation', letter: contact.user.name[0] })
        contactsAlphaSeperation.push(contact)
        if (i !== contactsWithName.length - 1) {
          if (contact.user.name[0] !== contactsWithName[i+1]) {
            contactsAlphaSeperation.push({ component: 'alphaSeperation', letter: contactsWithName[i+1].user.name[0] })
          }
        }
      })
    }

    setCcontactsAlphaSeperation(contactsAlphaSeperation)
    setContactsWithNoName(contactsWithNoName)
  }


  useEffect(() => {
    if (contacts) renderContactsHandler()
  }, [])
  
  useEffect(() => {
    if (contacts) renderContactsHandler()
  }, [contacts])

  return (
    <Root>

      {contactsAlphaSeperation?.map((comp, i) => {
        let render
        if (comp.component === 'alphaSeperation') {
          render = <Typography
                      key={i}
                      className="alphaSeperation"
                    >
                      {comp.letter}
                    </Typography>
        } else {
          render = <ContactItem 
                      key={i}
                      contact={comp}
                        /> 
        }
        return render
      })}

      {contactsWithNoName?.length > 0 ? 
        <Typography
          className="alphaSeperation"
        >
          #
        </Typography> : ''}
      
      {contactsWithNoName?.map((contact, i) => (
        <ContactItem 
          key={i}
          contact={contact}
          />
      ))}

    </Root>
  )
}