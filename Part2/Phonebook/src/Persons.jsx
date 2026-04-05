import React from "react";

const Persons = ({ numbersToShow }) => {
  return (
    <div>
      {numbersToShow.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default Persons;
