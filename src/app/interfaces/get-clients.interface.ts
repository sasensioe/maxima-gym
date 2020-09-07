import { Client } from '../models/client.model';

export interface GetClients{

    clients: Client[];
    total: number;

}