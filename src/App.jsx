
import Form from "./components/Form"
import Profile from "./components/Profile"
import UserList from "./components/UserList"
import UserState from "./Context/User/UserState"
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <UserState>
      <div className="container p-4">
        <h1>React Context</h1>
        <div className="row">
          <div className="col-md-12">
            <Form/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <UserList />
          </div>
          <div className="col-md-5">
            <Profile />
          </div>
        </div>
      </div>
    </UserState>
  )
}

export default App