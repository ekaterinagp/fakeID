export class User {

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
        public spouse: object,
        public children: Array<object>,
        public parents: Array<object>,
        public isChild: string,
        public isEmployee: boolean,
    ) {}
}