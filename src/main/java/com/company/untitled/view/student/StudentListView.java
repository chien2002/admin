package com.company.untitled.view.student;

import com.company.untitled.entity.Student;

import com.company.untitled.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;

@Route(value = "students", layout = MainView.class)
@ViewController("Student.list")
@ViewDescriptor("student-list-view.xml")
@LookupComponent("studentsDataGrid")
@DialogMode(width = "64em")
public class StudentListView extends StandardListView<Student> {
}