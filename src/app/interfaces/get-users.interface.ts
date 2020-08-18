import { User } from '../models/user.model';

export interface GetUsers{

    users: User[];
    total: number;

}