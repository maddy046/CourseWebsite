package com.courseapplication.courses.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.courseapplication.courses.entities.Course;

public interface CourseDao extends JpaRepository<Course, Long> {

}
