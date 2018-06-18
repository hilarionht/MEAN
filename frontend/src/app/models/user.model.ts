export class User{
    constructor(
        public name: string,
        public email: string,
        public password: string,
        public username: string,
        public dataAdd: Date,
        public img?: string,
        public role?: string,
        public google?: boolean,
        public _id?: string
    ) {

    }
}