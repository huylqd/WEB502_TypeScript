"use strict";
// exports.__esModule = true;
var arrNumber = [1, 2, 3, 4, 5];
var arrString = ["phuong", "huy", "luong"];
var arrMix = [1, 2, 3, 4, 5, "phuong"];
// OBJECT interface
var projects = {
  id: 1,
  name: "Du an 1",
  image: "abc.jpg",
  link: "fb.com/ctp",
  status: "success",
};
//show object interface
var handleProject = function (project) {
  //   console.log(project);
  return project;
};
handleProject(projects);
//ARRAY interface
var projectList = [
  {
    id: 1,
    name: "Du an 1",
    image:
      "https://res.cloudinary.com/phuong-fpoly/image/upload/v1675585737/Project%20ECMAScript/Portfolio/Screenshot_2023-02-05_152333_rgswz0.png",
    link: "fb.com/phuongctdev",
    status: "success",
  },
  {
    id: 2,
    name: "Du an tot nghiep",
    image:
      "https://res.cloudinary.com/phuong-fpoly/image/upload/v1676948459/Ass-ECMA/wjl0zhrngbtbrqxhujtr.jpg",
    link: "fb.com/phuongctdev",
    status: "loading 50 percent",
  },
  {
    id: 3,
    name: "Du an mau",
    image:
      "https://res.cloudinary.com/phuong-fpoly/image/upload/v1676948130/Ass-ECMA/gnjl8eqryll7abnvy7ow.jpg",
    link: "fb.com/phuongctdev",
    status: "completed",
  },
];
var showProject = function (projects) {
  var showpro = document.querySelector("#app");
  if (showpro)
    showpro.innerHTML = projects
      .map(function (project) {
        return /*html*/ "<div> \n  <h3>"
          .concat(project.name, '</h3>\n  <img src="')
          .concat(
            project.image,
            '" style="width: 90px; height: 90px; border: 1px solid gray;"> <br>\n  <a href="'
          )
          .concat(project.link, '">Link</a>\n  <p>')
          .concat(project.status, "</p>\n  </div>");
      })
      .join("");
};
showProject(projectList);
