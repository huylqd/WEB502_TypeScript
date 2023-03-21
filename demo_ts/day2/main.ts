export {};

const arrNumber: number[] = [1, 2, 3, 4, 5];
const arrString: string[] = ["phuong", "huy", "luong"];
const arrMix: Array<number | string> = [1, 2, 3, 4, 5, "phuong"];

// const projectList: Array<{ id: number; name: string }> = [
//   { id: 1, name: "Du an 1" },
//   { id: 2, name: "Du an tot nghiep" },
// ];

//bat buoc interface
interface Iproject {
  id: number;
  name: string;
  image: string;
  link: string;
  status: string;
}
// OBJECT interface
const projects: Iproject = {
  id: 1,
  name: "Du an 1",
  image: "abc.jpg",
  link: "fb.com/ctp",
  status: "success",
};
//show object interface
const handleProject = (project: Iproject): Iproject => {
  //   console.log(project);
  return project;
};
handleProject(projects);

//ARRAY interface
const projectList: Iproject[] = [
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
const showProject = (projects: Iproject[]): void => {
  const showpro = document.querySelector("#app");
  if (showpro)
    showpro.innerHTML = projects
      .map((project) => {
        return /*html*/ `<div> 
  <h3>${project.name}</h3>
  <img src="${project.image}" style="width: 90px; height: 90px; border: 1px solid gray;"> <br>
  <a href="${project.link}">Link</a>
  <p>${project.status}</p>
  </div>`;
      })
      .join("");
};
showProject(projectList);
