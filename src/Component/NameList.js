import React from 'react'
import PersonList from './PersonList'

function NameList() {
    const persons =[{
        id:1,
        name:'Tom',
        age:'27'
    },
    {
        id:2,
        name:'jerry',
        age:'28'
    }]
    // const peronList = persons.map(person => (<h2> I am {person.
    //     Iam {person.age}</h2>))

    const personList = persons.map(person => (<PersonList key={person.id} person={person}/>))
  return (
    <div>{personList}</div>
  )
}

export default NameList