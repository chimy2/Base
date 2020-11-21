import './App.css';
import Customer from './components/Customer'

const customer={
  'name': 'chimy',
  'birthday': 951013,
  'gender': '남자',
  'job': '학생'
}

function App() {
  return (
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
      />
  );
}

export default App;
