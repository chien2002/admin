package com.company.untitled.view.student;

import com.company.untitled.entity.Student;

import com.company.untitled.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;

@Route(value = "students/:id", layout = MainView.class)
@ViewController("Student.detail")
@ViewDescriptor("student-detail-view.xml")
@EditedEntityContainer("studentDc")
public class StudentDetailView extends StandardDetailView<Student> {
}