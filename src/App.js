import Form from "./Form"

function App() {
  const getData = (data) => {
    console.log("Coming from AppJS", data);
  }
  return <div>
    <Form  onSubmit= {getData}/>
  </div>
}
export default App