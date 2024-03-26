import UserProfile from './components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Solutions Architect',
    uniqueNo: 1,
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Devops Engineer',
    uniqueNo: 2,
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Ml-Ops Engineer',
    uniqueNo: 3,
  },
  {
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
    uniqueNo: 4,
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="name">Users List</h1>
    <ul>
      {userDetailsList.map(each => (
        <UserProfile userDetails={each} key={each.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
