import Header from "./header";
import Content from "./content";
import Total from "./total";

const Course = ({ course }) => {
   const total = course.parts.reduce((suma, part) => suma + part.exercises, 0);

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  );
};

export default Course;
