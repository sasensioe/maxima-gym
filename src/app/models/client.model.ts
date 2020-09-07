
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



export class Client {

    constructor(
        public name: string,
        public surname: string,
        public plan: string,
        public img: string,
        public routine: Array<string>,
        public address: Address,
        public contact: Contact,
        public access: Access,
        public uid: string
    ){}

}