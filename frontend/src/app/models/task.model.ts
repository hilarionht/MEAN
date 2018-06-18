export class Task{
    constructor(
        public name: string,
        public description: String,
        public dateAdd:  Date,
        public status:  Boolean,
        public user: String,
        public umod: String,
        public _id?: String                                        
    ) {

    }
}