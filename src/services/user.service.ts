import * as db from "../model/_index";
import bcryptjs from "bcryptjs";
class userService {

    async create(payload: any) {
        try {
            const salt: any = await bcryptjs.genSalt(10);
            if (payload["password"]) {
                payload["password"] = await bcryptjs.hash(payload["password"], salt);
            }
            return await db.userModel.create(payload);
        } catch (error) {
            throw error;
        }
    }

    
    async find(){
        try {
            return await db.userModel.find();
        } catch (error) {
            throw error;
        }
    }

    async deleteOne(userId: string) {
        try {
            return await db.userModel.deleteOne({ _id: userId });
        } catch (error) {
            throw error;
        }
    }

    async updateOne(query:any, payload: any) {
        try {
            return await db.userModel.updateOne({ _id: query }, payload);
        } catch (error) {
            throw error;
        }
    }

    async findOne(query: any){
        try {
            return await db.userModel.findOne(query);
        } catch (error) {
            throw error;
        }
    }
}

export const UserService = new userService();
