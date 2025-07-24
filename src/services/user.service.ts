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


    async find(payload:Object){
        try {
            return await db.userModel.find(payload);
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

    async aggregatePaginate(aggregate: any[], option: { page: Number; limit: Number }) {
            return new Promise(async (resolve, reject) => {
                try {
                    var myAggregate = db.userModel.aggregate(aggregate);
                    var data = await db.userModel.aggregatePaginate(myAggregate, option);
                    resolve(data);
                } catch (error) {
                    reject(error);
                }
            });
        }

    async findAgents(payload?: any, option?: { page: Number; limit: Number }) {
        let filter: any = [
            {
                $match:payload
            },
            {
                $sort: { createdAt: -1 },
            },
        ];

        return await this.aggregatePaginate(filter, option);
    }
}

export const UserService = new userService();
