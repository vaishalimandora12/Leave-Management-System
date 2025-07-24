import mongoose, { Document, model, Schema } from "mongoose";
import { enumType } from "../utils/enum";

import Inc from "mongoose-sequence";
import mongoosePaginate, { paginate } from "mongoose-paginate-v2";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";

const AutoIncrement = Inc(mongoose);
let userSchema = new mongoose.Schema(
    {
        role: {
            type: String,
            enum: [enumType.role.agent, enumType.role.admin],
            required: true,
        },
        firstName: {
            type: String,
            default: null,
        },
        lastName: {
            type: String,
            default: null,
        },
        password: {
            type: String,
            default: null,
        },
        email: {
            type: String,
            lowercase: true,
        },
        userId: {
            type: Number,
        },
        status: {
            type: String,
            enum: [enumType.BlockStatus.blocked, enumType.BlockStatus.unBlocked],
            default: enumType.BlockStatus.unBlocked,
        },
    },
    { timestamps: true }
);
userSchema.plugin(mongoosePaginate);
userSchema.plugin(aggregatePaginate);
userSchema.plugin(AutoIncrement, { inc_field: "userId" });


export const userModel: any = mongoose.model("user", userSchema);
