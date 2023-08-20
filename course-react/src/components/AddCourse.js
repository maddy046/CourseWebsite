import axios from "axios";
import React, { Fragment , useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourse = () => {

  useEffect(()=>{
    document.title="Add Course";
  }, []);

  const [course,setCourse] = useState({});

  //form handler function
  const handleForm=(e)=>{
      console.log(course);
      postDatatoServer(course);
      e.preventDefault();
  }


  //create function data to post data on server 
  const postDatatoServer=(data)=>{
    axios.post(`${base_url}/courses`,data).then((response)=>{
      console.log(response);
      console.log("success");
      toast.success("course add successfully",{position:"bottom-left"});
      setCourse({id: "", title: "", description: ""});
    },(error)=>{
      console.log(error);
      console.log("error");
      toast.error("something went wrong",{position: "bottom-left"});
    }
    
    );
  }

  return (
    <Fragment>
      <h1 className="text-center my-3">Fill the Course Detail</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label for="userId">Course Id</Label>
          <Input type="text" placeholder="Enter Id" name="userId" id="userId"  
          onChange={(e)=>setCourse({...course,id:e.target.value})}/>
        </FormGroup>

        <FormGroup>
          <Label for="title">Course Title</Label>
          <Input
            type="text"
            placeholder="Enter Title Here"
            name="courseTitle"
            id="title"
            onChange={(e)=>setCourse({...course,title: e.target.value})}
          />
        </FormGroup>

        <FormGroup>
          <Label for="description">Course Description</Label>
          <Input id="description" name="courseDiscription" type="textarea" style={{height: 100}} 
          onChange={(e)=>setCourse({...course,description: e.target.value})}
          />
        </FormGroup>

        <Container className="text-center">
            <Button type="submit"   color="success mx-2">
              Add Course</Button>
            <Button type="reset" color="warning "
             onClick={()=>{
              setCourse({id: "", title: "", description: ""});
            }} 
            >Clear</Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
