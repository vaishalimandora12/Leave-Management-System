import * as db from "../model/_index";
import bcryptjs from "bcryptjs";
class leaveService {

    async create(payload: any) {
        try {
            return await db.leaveModel.create(payload);
        } catch (error) {
            throw error;
        }
    }


    async find(payload:Object){
        try {
            return await db.leaveModel.find(payload);
        } catch (error) {
            throw error;
        }
    }

    async deleteOne(userId: string) {
        try {
            return await db.leaveModel.deleteOne({ _id: userId });
        } catch (error) {
            throw error;
        }
    }

    async updateOne(query:any, payload: any) {
        try {
            return await db.leaveModel.updateOne({ _id: query }, payload,{new:true});
        } catch (error) {
            throw error;
        }
    }

    async findOne(query: any){
        try {
            return await db.leaveModel.findOne(query);
        } catch (error) {
            throw error;
        }
    }

    async aggregatePaginate(aggregate: any[], option: { page: Number; limit: Number }) {
            return new Promise(async (resolve, reject) => {
                try {
                    var myAggregate = db.leaveModel.aggregate(aggregate);
                    var data = await db.leaveModel.aggregatePaginate(myAggregate, option);
                    resolve(data);
                } catch (error) {
                    reject(error);
                }
            });
        }

    async findAllLeaves( option?: { page: Number; limit: Number }) {
        let filter: any = [
            {
                $sort: { createdAt: -1 },
            },
        ];

        return await this.aggregatePaginate(filter, option);
    }
}

export const LeaveService = new leaveService();
