import React, { Component } from 'react';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/Contacts/ContactList';
import { Filter } from '../components/Filter/Filter';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));

    this.state.contacts.forEach(contact => {
      if (contact.name.toLowerCase() === newContact.name.toLowerCase()) {
        alert(`${newContact.name} is already in contacts`);
        this.deleteContact(newContact.id);
      }
    });
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value.trim() });
  };

  deleteContact = contactID => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactID),
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <Container>
        <h1>Phoneboock</h1>
        <ContactForm onSubmit={this.addNewContact} />
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <h2>Contacts</h2>
        <ContactList
          contacts={this.getFilteredContacts()}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
