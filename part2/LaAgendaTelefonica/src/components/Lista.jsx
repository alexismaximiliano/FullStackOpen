/* eslint-disable react/prop-types */
const Lista = ({ persona }) => {
  return (
    <li>
      {persona.name}:{persona.numero}
    </li>
  );
};
export default Lista;
