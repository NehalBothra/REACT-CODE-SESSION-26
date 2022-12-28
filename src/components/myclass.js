import React from 'react'
const subjects=['English','Maths','Science','Social','Computer']
const sports = ['Soccer','Football','Basketball']
export default class MyClass extends React.Component {
 render(){
        return(
                <>
                <div className='container'>
                <h1>SCHOOL</h1>
                <h2>Subjects In School</h2>
                <div>
                        {subjects.map(item=>(
                                <p>{item}</p>
                        ))}
                </div>
                <h2>Sports activites</h2>
                <div>
                        {sports.map(i=>(
                               <ul>
                                <li>{i}</li>
                               </ul> 
                        ))}
                </div>
                </div>
                </>
                
        )
 }
}

