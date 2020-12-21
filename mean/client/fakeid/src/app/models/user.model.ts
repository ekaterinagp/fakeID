export class User {
    constructor(
        public id: string,
        public name: string,
        public dateOfBirth: string,
        public age: number,
        public address: string,
        public genderIdentifation: string,
        public gender: string,
        public maritalStatus: string,
        public CVR: string,
        public companyName: string,
        public spouse: object,
        public child: object,
        public parents: object,
    ) {}
}