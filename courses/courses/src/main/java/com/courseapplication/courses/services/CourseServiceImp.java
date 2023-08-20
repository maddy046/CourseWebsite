package com.courseapplication.courses.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.courseapplication.courses.dao.CourseDao;
import com.courseapplication.courses.entities.Course;

@Service
public class CourseServiceImp implements CourseService {

	@Autowired
	private CourseDao courseDao;
//	List<Course> list;
	
	public CourseServiceImp() {
		
//		list=new ArrayList<>();
//		list.add(new Course(1,"Java","This is the java course"));
//		list.add(new Course(2,"JS","This is the JavaScript course"));
		
		
	}
	
	@Override
	public List<Course> getCourses() {
		return courseDao.findAll();
	}

	@SuppressWarnings("deprecation")
	@Override
	public Course getCourse(long courseId) {
//		Course c = null;
//		
//		for(Course course:list)
//		{
//			if(course.getId()==courseId) {
//				c=course;
//				break;
//			}
//		}		
		
		return courseDao.getOne(courseId);
	}

	@Override
	public Course addCourse(Course course) {
//		list.add(course);
		return courseDao.save(course);
	}

	@Override
	public Course updateCourse(Course course) {
//		list.forEach(
//				e->{
//					if(e.getId()==course.getId()) {
//						e.setTitle(course.getTitle());
//						e.setDiscription(course.getDiscription());
//					}
//				}
//				);
		
		  courseDao.save(course);
		
		return course;
	}

	@Override
	public void deleteCourse(long parseLong) {
//		list=this.list.stream().filter(
//				e->e.getId()!=parseLong).collect(Collectors.toList());
		@SuppressWarnings("deprecation")
		Course entity = courseDao.getOne(parseLong);
		courseDao.delete(entity);
	}

	




}
