import React from "react";
const Header = ({ course }) => <h1>{course}</h1>;

const Content = ({ parts }) => {
  console.log(parts);
  return (
    <div>
      {parts.map((part, i) => {
        return <Part key={i} part={part} />;
      })}
    </div>
  );
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Total = ({ total }) => <p>Total of {total} exercises </p>;

const Course = ({ courses }) => {
  console.log(courses);
  const component = courses.map((course) => {
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total
          total={course.parts.reduce((acc, part) => acc + part.exercises, 0)}
        />
      </div>
    );
  });

  return <div>{component}</div>;
};

export default Course;
