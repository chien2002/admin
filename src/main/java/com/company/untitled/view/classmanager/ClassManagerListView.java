package com.company.untitled.view.classmanager;

import com.company.untitled.entity.ClassManager;

import com.company.untitled.view.main.MainView;

import com.vaadin.flow.router.Route;
import io.jmix.flowui.view.*;

@Route(value = "classManagers", layout = MainView.class)
@ViewController("ClassManager.list")
@ViewDescriptor("class-manager-list-view.xml")
@LookupComponent("classManagersDataGrid")
@DialogMode(width = "64em")
public class ClassManagerListView extends StandardListView<ClassManager> {
}