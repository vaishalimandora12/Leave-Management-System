import * as db from "../model/_index";
import bcryptjs from "bcryptjs";
class sessionService {

    async create(payload: any): Promise<any> {
        try {
            return await db.sessionModel.create(payload);
        } catch (error) {
            throw error;
        }
    }


    async find() {
        try {
            return await db.sessionModel.find();
        } catch (error) {
            throw error;
        }
    }

    async deleteOne(userId: string) {
        try {
            return await db.sessionModel.deleteOne({ _id: userId });
        } catch (error) {
            throw error;
        }
    }

    async updateOne(query:any, payload: any) {
        try {
            return await db.sessionModel.updateOne( query, payload, { upsert: true });
        } catch (error) {
            throw error;
        }
    }

    async findOne(query: any){
        try {
            return await db.sessionModel.findOne(query);
        } catch (error) {
            throw error;
        }
    }

    async deleteSession(query: Object) {
        try {
            return await db.sessionModel.deleteMany(query);
        } catch (error) {
            throw error;
        }
    }

    async deleteFirstSessionAdmin(payload) {
        try {
            const sessions = await db.sessionModel.find({ userId: payload });
            if (sessions.length >= 5) {
                await db.sessionModel.findOneAndDelete({ userId: payload }, { sort: { createdAt: 1 } });
            }
        } catch (error) {
            throw error;
        }
    }
}

export const SessionService = new sessionService();
