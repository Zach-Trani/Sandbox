/**
 *
 *
 * @return {*}
 */
function App() {
  return (
    <div>
      <div>This is the Home Page!</div>

      {/* use a form to package inputs together as one unit */}
      {/* use a post method to 'Create something new' like in CRUD */}
      {/* <form action="/new" method="POST">
          <label for="textinput">Input Text</label>   <!-- labels are a good practice for input! -->
          <input type="text" name="textinput">    <!-- input needs a name to display in the database, will not show otherwise -->
          <br>
          <label for="numinput">Input Number</label>
          <input type="number" name="numinput" value=0>
          <br>
          <button type="submit">Add item</button>
      </form> */}

      <form action="/new" method="POST">
        <label for="textinput">Input Text</label>
        <input type="text" name="textinput"></input>
        <br></br>
        <label for="numinput">Input Number</label>
        <input type="number" name="numinput" value={0}></input>
        <br></br>
        <button type="submit">Add item</button>
      </form>

      {/* <ul>
        {itemList.map((item) => (
          <li key={item._id}>
            <div>{item.textinput}</div>
            <div>{item.numinput}</div>
            <a href={`/edit/${item._id}`}>Edit</a>
            <a href={`/edit/remove/${item._id}`}>Remove</a>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
