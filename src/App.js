import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Courses from './Courses';
import Loading from './Loading';

function App() {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true)

  const deleteCourse= (id) =>{
   
    const afterdeletedCourses=courses.filter((course) => course.id !==id);
    setCourses(afterdeletedCourses);

  }



  const fetchCourses= async () =>{
    setLoading(true);

    try{
        const response= await axios.get('http://localhost:3000/courses');
        setCourses(response.data);
        setLoading(false);
    }catch(error) {
        setLoading(false);
    }

  }


  useEffect(()=>{
   fetchCourses();
  },[])



  return (
    <div className="App">

      {loading ? (
          <Loading/>
      ):(  
          <>
            {courses.length === 0 ? (
              <div className='refreshDiv'>
               <h2>All Courses is delete !</h2>
               <button className="refreshbtn" onClick={() => {fetchCourses()}}>Refresh</button>
              </div>
            ): <Courses courses={courses} removeCourse={deleteCourse}/> } 
          
          </>
          
          
      )}
      
    </div>
  );
}

export default App;
