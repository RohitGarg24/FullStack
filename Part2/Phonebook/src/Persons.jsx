import React from "react";

const Persons = ({ numbersToShow, handleDelete }) => {
  return (
    <div>
      {numbersToShow.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}{" "}
          <button onClick={() => handleDelete(person.id, person.name)}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default Persons;
