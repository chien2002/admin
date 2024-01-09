package com.company.untitled.view.classmanager;

import com.company.untitled.entity.ClassManager;

import com.company.untitled.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;

@Route(value = "classManagers/:id", layout = MainView.class)
@ViewController("ClassManager.detail")
@ViewDescriptor("class-manager-detail-view.xml")
@EditedEntityContainer("classManagerDc")
public class ClassManagerDetailView extends StandardDetailView<ClassManager> {
}