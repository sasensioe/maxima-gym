


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

export interface User{
    name: string;
    surname: string;
    role: string;
    address: Address;
    contact: Contact;
    access: Access
}