
interface Address{
    address: string;
    city: string;
    province: string;
    postalCode: string;
}

interface Contact {
    email: string;
    phone: number;
}

interface Access{
    userName: string;
    password: string;
}



export class User {

    constructor(
        public name: string,
        public surname: string,
        public role: string,
        public address: Address,
        public contact: Contact,
        public access: Access,
        public uid: string
    ){}

}