/* Sort */
// sorting --> name / age / surname
const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    createdAt: new Date("12-23-2021"),
    editedAt: null,
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    createdAt: new Date("12-23-2021"),
    editedAt: null,
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
    createdAt: new Date("12-23-2021"),
    editedAt: null,
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "kale.biz",
    createdAt: new Date("12-23-2021"),
    editedAt: null,
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
    createdAt: new Date("12-23-2021"),
    editedAt: null,
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    createdAt: new Date("12-23-2021"),
    editedAt: null,
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    phone: "210.067.6132",
    website: "elvis.io",
    createdAt: new Date("12-23-2021"),
    editedAt: null,
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    createdAt: new Date("12-23-2021"),
    editedAt: null,
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    createdAt: new Date("12-23-2021"),
    editedAt: null,
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    phone: "024-648-3804",
    website: "ambrose.net",
    createdAt: new Date("12-23-2021"),
    editedAt: null,
  },
];
// field (field name) / order (asc - des) / data
function sortBy(field, data, order = "asc") {
  // check if field exist
  const fields = ["name", "age", "surname", "createdAt", "editedAt"];
  if (fields.includes(field)) {
    // check order
    if (order === "asc")
      // sort
      return data.sort((a, b) => (a[field] > b[field] ? 1 : -1)); // asc
    return data.sort((a, b) => (a[field] < b[field] ? 1 : -1)); // des
  }
  throw new Error("Field do not Exist !");
}

console.log("sort by -->  name: ", sortBy("name", users));
console.log("sort by -->  surname: ", sortBy("username", users));
console.log("sort by -->  age: ", sortBy("age", users, "desc"));
console.log("sort by -->  createdAt: ", sortBy("createdAt", users));
console.log("sort by -->  editedAt: ", sortBy("editedAt", users, "desc"));

/* Filter */
// function filterFunction(arr) {
//   return function (x) {
//     return arr.includes(x); // include a specific condition
//   };
// }

// function Filter(filters, data) {
//   // check if filters exist
//   if (Array.isArray(filters) && filters.length > 0) {
//     // filter data with filters with they exist
//     for (let filter of filters) {
//       if (filter) {
//         data.filter(filterFunction(filter));
//       }
//     }
//   }
//   return data;
// }

// console.log("filter -->: ", Filter(["username"], users));
