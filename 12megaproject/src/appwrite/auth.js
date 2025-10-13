import conf from './config.js';
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;


    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf. appwritePROJECT_ID);

        this.account = new Account(this.client)
    }


    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                //another
                return this.login({email, password});
            } else {
                return userAccount;
            }

        } catch(error){
            throw error;
        }
    }


    async login({email, password}) {
        try {
            return await this.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }


    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }

        return null;
    }


    async logout() {
        try{
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }

}

const authobject = new AuthService();

export default authobject;