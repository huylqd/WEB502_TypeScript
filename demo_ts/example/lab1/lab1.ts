// Bai 1
interface Iproject {
  id: Number;
  name: String;
  image: String;
  link: String;
  member: number;
}
//Định nghĩa 1 mảng dữ liệu tên projectList
const projectList: Iproject[] = [
  {
    id: 1,
    name: "Chu Tuan Phuong",
    image:
      "https://res.cloudinary.com/phuong-fpoly/image/upload/v1675732410/Phuongdzvl/z4089536537933_86732b06f1b33f8f45773fe1ff68548a_lkddmz.jpg",
    link: "fb.com/phuongdzvl123",
    member: 1,
  },
  {
    id: 2,
    name: "Le Quang Huy",
    image:
      "https://res.cloudinary.com/phuong-fpoly/image/upload/v1660066943/1900851_uwnyed.webp",
    link: "fb.com/huydzvl123",
    member: 2,
  },
  {
    id: 3,
    name: "Tran Tien Luong",
    image:
      "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654938513/Screenshot_310_anja83.png",
    link: "fb.com/luongdzvl123",
    member: 3,
  },
];
console.log("Array before push: ", projectList);

const listProject = (projects: Iproject[]): void => {
  const showProject = document.querySelector("#app");
  if (showProject)
    showProject.innerHTML = projects
      .map((project) => {
        return /*html*/ `
    <div> 
  <h3>${project.name}</h3>
  <img src="${project.image}" style="width: 90px; height: 90px; border: 1px solid gray;"> <br>
  <p>Link<a href="${project.link}"></a></p>
  <p>Member: ${project.member}</p>
  </div>
    `;
      })
      .join("");
};

//Bài 2:
const project: Iproject = {
  id: 4,
  name: "Phuong",
  image:
    "https://res.cloudinary.com/phuong-fpoly/image/upload/v1675732410/Phuongdzvl/z4089536537933_86732b06f1b33f8f45773fe1ff68548a_lkddmz.jpg",
  link: "fb.com/phuongdzvl123",
  member: 4,
};
const addProject = (array: Iproject[], object: Iproject): Iproject[] => {
  array.push(object);
  return array;
};
console.log("Array after push: ", addProject(projectList, project));

//Bai 3:
const id = Number(projectList[2].id);
const deleteProject = (id: number, projectArr: Iproject[]): Iproject[] => {
  const newArray = projectArr.filter((project) => project.id !== id);
  return newArray;
};

console.log("Array after delete: ", deleteProject(id, projectList));
listProject(projectList);
