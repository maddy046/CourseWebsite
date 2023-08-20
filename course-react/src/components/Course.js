import axios from "axios";
import React from "react";
import { Card,CardBody, CardTitle,CardSubtitle,CardText,CardFooter,Button,Container } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Course=({course, update})=>{


//delete course from server
const deleteCourse=(id)=>{
    axios.delete(`${base_url}/courses/${id}`).then(
        (response)=>{
            toast.success("delete successfull");
            update(id);
        },
        (error)=>{
            toast.error("delete not done");
        }
    );
}


    return(
        <Card className="text-center">
            <CardBody>
            <CardSubtitle className="font-weight-bold">
                   {course.id}
                </CardSubtitle>
                <CardSubtitle className="font-weight-bold">
                   {course.title}
                </CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger me-2" onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button color="warning" onClick={()=>{
                        updateCourse(course.id);
                    }} >Update</Button>
                </Container>
            </CardBody>
        </Card>
    );
}

export default Course;