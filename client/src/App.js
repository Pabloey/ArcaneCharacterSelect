
function App () {
  const testArray = ["item1", "item2", "item3", "item4", "item5"]
  return (
    <>
    {testArray.map((e,i) => (
      <span>{e}</span>
    ))}
    </>
  );
}

export default App;
