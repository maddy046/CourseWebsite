import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourses = () => {
  useEffect(()=>{
    document.title="All Courses || Maddy Website";
  }, []);


// function to call server:
const getAllCoursesFromServer=()=>{
  axios.get(`${base_url}/courses`).then(
    (response)=>{
      //success
      console.log(response);
      toast.success("Courses has been loaded",{position:"bottom-left"});
      setCourses(response.data);
    }, 
    (error)=>{
        //for error
        console.log(error);
        toast.error("server down",{position:"bottom-center"});
    }
  )
};

//calling loading course function
useEffect(()=>{
  getAllCoursesFromServer();
}, []);

  const [courses, setCourses] = useState([]);

  const updateCourses=(id)=> {
    setCourses(courses.filter((c)=> c.id != id));
  }


  return (
    <div>
      <h1 className="text-center">All Courses</h1>
      <p>The following are list of courses</p>

      {courses.length > 0
        ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses} />)
        : "No Courses"}
    </div>
  );
};

export default AllCourses;
