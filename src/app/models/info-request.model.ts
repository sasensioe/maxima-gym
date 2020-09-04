
export class InfoRequest {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public date: Date,
        public phone: number,
        public message: string,
        public status: string,
        public calls: Object,
    ){}

}

