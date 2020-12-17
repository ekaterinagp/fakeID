// interface User {
//   name: string;
//   CPR: string;
//   CVR: string;
//   address: string;
//   age: Number;
//   children: [];
//   dateOfBirth: string;
//   formattedDate: string;
//   gender: string;
//   genderIdentification: string;
//   maritalStatus: string;
//   maritalStatusId: Number;
//   parents: [];
//   spouse: { name: string, _id: string };
//   _id: string;
// }

export const users = [
  {
    name: "Anna Anderson",
    CPR: "0707870002",
    CVR: null,
    address: "Lygten 37, 2400 Norrebro",
    age: 33,
    children: [],
    dateOfBirth: "070787",
    formattedDate: "07-07-87",
    gender: "female",
    genderIdentification: "0002",
    maritalStatus: "Married",
    maritalStatusId: 2,
    parents: [],
    spouse: { name: "Peter Peterson", _id: "5fdb3054b61bd736f8c73a59" },
    _id: "5fdb3033b61bd736f8c73a58",
  },
  {
    CPR: "2101620001",
    CVR: null,
    address: "Lygten 37, 2400 Norrebro",
    age: 58,
    children: [],
    dateOfBirth: "210162",
    formattedDate: "21-01-62",
    gender: "male",
    genderIdentification: "0001",
    maritalStatus: "Married",
    maritalStatusId: 2,
    name: "Peter Peterson",
    parents: [],
    spouse: { name: "Anna Anderson", _id: "5fdb3033b61bd736f8c73a58" },
    _id: "5fdb3054b61bd736f8c73a59",
  },
  {
    CPR: "0212200002",
    address: "Lygten 17, 2400 Norrebro",
    age: 0,
    children: [],
    dateOfBirth: "021220",
    formattedDate: "02-12-20",
    gender: "female",
    genderIdentification: "0002",
    maritalStatus: "Unknown",
    maritalStatusId: 8,
    name: "Baby User",
    parents: [],
    spouse: {},
    _id: "5fdb50f29a52d836a46d5c75",
  },
  {
    CPR: "2607820001",
    CVR: "12345678",
    address: "Lygten 37, 2400 Norrebro",
    age: 38,
    children: [],
    companyName: "EE A/S",
    dateOfBirth: "260782",
    formattedDate: "26-07-82",
    gender: "male",
    genderIdentification: "0001",
    maritalStatus: null,
    name: "Employee Employee",
    spouse: {},
    _id: "5fdb3071b61bd736f8c73a5a",
  },
];

export default {
  users,
};
