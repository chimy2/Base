import './App.css';
import Customer from './components/Customer'

const customer=[{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  // random으로 이미지를 보여주는 사이트로 64*64크기로 설정
  'name': 'chimy',
  'birthday': 951013,
  'gender': '남자',
  'job': '학생'
},{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  // random으로 이미지를 보여주는 사이트로 64*64크기로 설정
  'name': '치미',
  'birthday': 940824,
  'gender': '여자',
  'job': '개발자'
},{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  // random으로 이미지를 보여주는 사이트로 64*64크기로 설정
  'name': '침침',
  'birthday': 951124,
  'gender': '남자',
  'job': '프리랜서'
}]

function App() {
  return (
    <div>
      <Customer
        id={customer[0].id}
        image={customer[0].image}
        name={customer[0].name}
        birthday={customer[0].birthday}
        gender={customer[0].gender}
        job={customer[0].job}
        />
      <Customer
        id={customer[1].id}
        image={customer[1].image}
        name={customer[1].name}
        birthday={customer[1].birthday}
        gender={customer[1].gender}
        job={customer[1].job}
        />
      <Customer
        id={customer[2].id}
        image={customer[2].image}
        name={customer[2].name}
        birthday={customer[2].birthday}
        gender={customer[2].gender}
        job={customer[2].job}
        />
        {
          customer.map(c=>{
            return(
              <Customer
                // map 사용 시 key값이 필요하므로 에러가 발생한다
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
                />
            );
          })
        }
    </div>
  );
}

export default App;
