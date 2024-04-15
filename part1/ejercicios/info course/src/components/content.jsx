import Part from "./part";
const Content = ({ parts }) => {
  return (
    //   <p>
    //     {/* {props.map((parts)=>(
    //       <Part key={parts.name} exercises={parts.exercises}/>
    //     ))} */}
    //     <Part name={props.parts[0].name} number={props.parts[0].exercises} />
    //      {/* <Part name={props.parts[0].name} number={props.parts[0].exercises} />
    //     <Part name={props.parts[1].name} number={props.parts[1].exercises} />
    //     <Part name={props.parts[2].name} number={props.parts[2].exercises} />  */}

    //   </p>
    <div>
      {parts.map((part) => {
        return <Part key={part.id} part={part} />;
      })}
    </div>
  );
};
export default Content;
