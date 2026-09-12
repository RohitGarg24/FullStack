import { useEffect, useState } from "react";
import PersonForm from "./PersonForm";
import Filter from "./Filter";
import Persons from "./Persons";
import Notification from "./Notification";
import {
  addPerson,
  deletePerson,
  getPersons,
  updatePerson,
} from "./Service/phoneService";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [search, setSearch] = useState("");
  const [okMessage, setOkMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const getPerson = async () => {
    const res = await getPersons();
    console.log("getPersons", res.data);
    setPersons(res.data);
  };
  const addContact = async (person) => {
    try {
      const res = await addPerson(person);
      console.log("addPerson", res.data);
      setPersons(persons.concat(res.data));
      setOkMessage(`Added ${person.name} successfully`);
      setErrorMessage(null);
      setTimeout(() => {
        setOkMessage(null);
      }, 5000);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response?.data?.error || "Error adding contact");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };
  useEffect(() => {
    getPerson();
  }, []);
  const numbersToShow = search
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase()),
      )
    : persons;
  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    // console.log(event.target.value);
    setNumber(event.target.value);
  };
  const handleSearchChange = (event) => {
    // console.log(event.target.value);
    setSearch(event.target.value);
  };
  const handleDelete = async (id, name) => {
    const confirmDelete = window.confirm(`Delete ${name}?`);

    if (confirmDelete) {
      try {
        const res = await deletePerson(id);
        console.log(res, "delete");
        setPersons(persons.filter((n) => n.id != res.data.id));
        setOkMessage(`Deleted ${name} successfully`);
        setErrorMessage(null);
        setTimeout(() => {
          setOkMessage(null);
        }, 5000);
      } catch (error) {
        console.error(error);
        setErrorMessage(error.response?.data?.error || "Error deleting contact");
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      }
    }
  };
  const handleUpdate = async (person, id) => {
    try {
      const res = await updatePerson(person, id);
      console.log("update=>", res);
      setPersons((prevPersons) =>
        prevPersons.map((p) => (p.id === id ? res.data : p)),
      );
      setOkMessage(`Updated successfully`);
      setErrorMessage(null);
      setTimeout(() => {
        setOkMessage(null);
      }, 5000);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response?.data?.error || "Error updating contact");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const existingPerson = persons.find((person) => person.name === newName);
    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `Do you want to update ${newName}'s contact?`,
      );
      if (confirmUpdate) {
        const personObj = { number };
        handleUpdate(personObj, existingPerson.id);
      }
    } else {
      const personObject = {
        name: newName,
        number: number,
      };
      addContact(personObject);
      setNewName("");
      setNumber("");
    }
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={okMessage} errorMessage={errorMessage} />
      <Filter search={search} handleSearchChange={handleSearchChange} />
      <div>
        <h2>add new</h2>
      </div>
      <PersonForm
        newName={newName}
        number={number}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons numbersToShow={numbersToShow} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
