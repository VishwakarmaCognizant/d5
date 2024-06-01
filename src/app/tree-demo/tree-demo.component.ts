import { Component, OnInit } from '@angular/core';
import { CourseNode } from '../Model/TreeModel';
 
import { NestedTreeControl } from '@angular/cdk/tree';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';
@Component({
  selector: 'app-tree-demo',
  templateUrl: './tree-demo.component.html',
  styleUrls: ['./tree-demo.component.css']
})
export class TreeDemoComponent implements OnInit {

 public TREE_DATA:CourseNode[]=[
  {
  name:"Introdction To Angular",
  ChildName:[
    {name:"Introduction to Angular"},
    {name:"Introduction to Java"}
    
  ]
},
{
  name:"Introdction To Material Desing",
  ChildName:[{
    name:"Material Form Desing",
    ChildName:[
      {name:"Input Text Box Desing"},
      {name:"Input Check Box Desing"},
      {name:"Input Dropdown Box Desing"}
    
    ]

}
  ]
},
{
  name:"Advance Material Design In Depth",
  ChildName:[
    {name:"Form Component"},
    {name:"Navigation & Container"}
  ]
}

];

 nstedDataSource=new MatTreeNestedDataSource<CourseNode>();
 nestedTreeControl=new NestedTreeControl<CourseNode>(node=>node.ChildName);

  constructor() { }

  ngOnInit(): void {

    this.nstedDataSource.data=this.TREE_DATA;
 

  

}
}
