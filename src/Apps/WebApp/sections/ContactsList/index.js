import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import { Typography } from "@mui/material"

import { Root } from "./component"

import ContactItem from "../../components/ContactItem"





export default function () {
  const { userData } = useSelector(state => state.user)
  const { contacts } = useSelector(state => state.contacts)
  const [contactList, setContactList] = useState([])


  const renderContactsHandler = () => {
    const contactsCopy = structuredClone(contacts)
    const contactsMinusUserContactItem = contactsCopy.filter(c => c.phone.number !== userData.phone.number)
    const contactsWithNoName = []
    const contactsWithName = contactsMinusUserContactItem.filter((contact) => {
      let op = false
      if (contact.userAccExist) {
        op = true
      } else {
        contactsWithNoName.push(contact)
      }

      return op
    })

    // Arrange contacts alpha list
    contactsWithName.sort((a, b) => {
      const aName = a.user.name.toLowerCase()
      const bName = b.user.name.toLowerCase()
      if (aName < bName) {
        return -1
      }
      if (aName > bName) {
        return 1
      }
      return 0
    })

    const contactsAlphaSeperation = []
    if (contactsWithName.length > 0) {
      contactsWithName.forEach((contact, i) => {
        if (i === 0) contactsAlphaSeperation.push({ component: 'alphaSeperation', letter: contact.user.name[0] })
        contactsAlphaSeperation.push(contact)
        if (i < contactsWithName.length - 1) {
          if (contact.user.name[0] !== contactsWithName[i+1].user.name[0]) {
            contactsAlphaSeperation.push({ component: 'alphaSeperation', letter: contactsWithName[i+1].user.name[0] })
          }
        }
      })
    }
    // Arrange non-alpha contacts list
    contactsWithNoName.sort((a, b) => {
      if (a.phone.number < b.phone.number) {
        return -1
      }
      if (a.phone.number > b.phone.number) {
        return 1
      }
      return 0
    })
    if (contactsWithNoName.length > 0) {
      contactsWithNoName.unshift({ component: 'alphaSeperation', letter: '#' })
    }

    const contactList = [ ...contactsAlphaSeperation, ...contactsWithNoName ]
    
    // Assign key index to all components
    contactList.forEach((comp, i) => {
      comp.index = `${i} - ${crypto.randomUUID()}`
    })

    setContactList(contactList)
  }



  useEffect(() => {
    if (contacts) renderContactsHandler()
  }, [])
  
  useEffect(() => {
    if (contacts) renderContactsHandler()
  }, [contacts])


  return (
    <Root>

      {contactList.map(comp => {
        let render
        if (comp.component === 'alphaSeperation') {
          render = <Typography
                      key={comp.index}
                      className="alphaSeperation"
                    >
                      {comp.letter}
                    </Typography>
        } else {
          render = <ContactItem 
                      key={comp.index}
                      contact={comp}
                        /> 
        }
        return render
      })}

    </Root>
  )
}