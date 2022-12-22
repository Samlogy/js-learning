/* Sort */
// sorting --> name / age / surname
let users = [
  {
    name: "John",
    age: 20,
    surname: "Johnson",
    createdAt: new Date("12-23-2021"),
    editedAt: null,
  },
  {
    name: "Pete",
    age: 18,
    surname: "Peterson",
    createdAt: new Date("12-21-2022"),
    editedAt: new Date("12-22-2022"),
  },
  {
    name: "Ann",
    age: 19,
    surname: "Zathaway",
    createdAt: new Date("12-22-2022"),
    editedAt: new Date("12-22-2022"),
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

// console.log("sort by -->  name: ", sortBy("name", users));
// console.log("sort by -->  surname: ", sortBy("surname", users));
// console.log("sort by -->  age: ", sortBy("age", users, "desc"));
console.log("sort by -->  createdAt: ", sortBy("createdAt", users));
console.log("sort by -->  editedAt: ", sortBy("editedAt", users, "desc"));
