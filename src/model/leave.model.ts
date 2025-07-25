import mongoose, { Document, model, Schema } from "mongoose";
import { enumType } from "../utils/enum";

import Inc from "mongoose-sequence";
import mongoosePaginate, { paginate } from "mongoose-paginate-v2";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";

let leaveSchema = new mongoose.Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
        fromDate: {
            type: Date,
        },
        toDate: {
            type: Date,
        },
        reason: {
            type: String,
        },
        status: {
            type: String,
            enum: [enumType.leaveStatus.accepted, enumType.leaveStatus.pending,enumType.leaveStatus.rejected],
            default: enumType.leaveStatus.pending,
        },
    },
    { timestamps: true }
);
leaveSchema.plugin(mongoosePaginate);
leaveSchema.plugin(aggregatePaginate);

export const leaveModel: any = mongoose.model("leave", leaveSchema);
