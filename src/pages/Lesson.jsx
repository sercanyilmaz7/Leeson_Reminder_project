import React from 'react'
import LessonCard from '../components/LessonCard/LessonCard'
import  { data } from "../helper/data"

const Lesson = () => {
    // console.log(data);
  return (
    <div className='lesson-container'>
        {data.map((item)=>{
            const {id,name,age,image}=item
            return <LessonCard key={id} name={name} age={age} image={image}  />;
        })}
    </div>
  )
}

export default Lesson