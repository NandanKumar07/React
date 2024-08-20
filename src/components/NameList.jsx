import React from 'react'
import Person from './Person.jsx';

function NameList() {
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Data Science'
    }
  ]
{/* const names = ['Bruce', 'Diana', 'Henry', 'Clark', 'Peter']
  const nameList = names.map(name => <h2> { name } </h2>); */}

{/*const personList = persons.map(persons => (
    <Person key = {persons.id} person = {persons}></Person>
  )) */}

  const names = ['Bruce', 'Diana', 'Clark']

  const nameList = names.map((name, index) => <h2 key = {index}>{index} {name}</h2>)
  return (
    <div>
      {/*{ personList }*/}
      { nameList }
    </div>
  )
}

export default NameList
