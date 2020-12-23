// export interface User {
//   _id: string;
//   name: string;
//   dateOfBirth: string;
//   age: number;
//   address: string;
//   gender: string;
//   maritalStatus: string;
//   CVR: string;
//   companyName: string;
//   spouse: object;
//   children: Array<object>;
//   parents: Array<object>;
//   isChild: string;
//   isEmployee: boolean;
//   [x: string]: any;
// }

export class User {
  [x: string]: any;
  constructor(
    public _id: string,
    public name: string,
    public dateOfBirth: string,
    public age: number,
    public address: string,
    public gender: string,
    public maritalStatus: string,
    public CVR: string,
    public companyName: string,
    public spouse: {
      _id: string;
      name: string | undefined;
    },
    public spouseId: string,
    public childId: string,
    public maritalStatusId: string,
    public children: [
      {
        _id: string;
        name: string | undefined;
        gender: string;
        age: number;
      }
    ],
    public parents: [
      {
        _id: string;
        name: string | undefined;
        gender: string;
        age: number;
      }
    ],
    public isChild: boolean,
    public isEmployee: boolean
  ) {}
}
