export const Mode = ({ setMode }) => {
  const handleChange = (event) => {
    const item = event.target.value;
    setMode(item);
  };
  return (
    <select onChange={handleChange}>
      <option>easy</option>
      <option>medium</option>
      <option>hard</option>
    </select>
  );
};
