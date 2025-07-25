import mongoose from 'mongoose';
import { Request, Response } from "express";
import { JsonWebTokenService } from "../../services/jwt.service";
import { _httpStatusService } from "../../utils/_httpStatus";
import { UserService } from "../../services/user.service";
import  { LeaveService } from "../../services/leave.service";
import { enumType } from "../../utils/enum";


class adminLeaveController {

    async allLeaveRequests(req: any, res: Response) {
        try {
            let querys: any = req.query;
            let query = {
                page: parseInt(querys.page) || 1,
                limit: parseInt(querys.limit) || 10,
            };
            let data = await LeaveService.findAllLeaves(query);
            return res.status(_httpStatusService.status.OK).json({
                status: _httpStatusService.status.OK,
                message: "successs.",
                data: data
            });
        } catch (error: any) {
            return res.status(_httpStatusService.status.serverError).json({
                status: _httpStatusService.status.serverError,
                message: error.message,
            });
        }
    }

    async changeLeaveStatus(req: any, res: Response) {
        try {
            const id = req.params.leaveId
            let data = await LeaveService.updateOne(new mongoose.Types.ObjectId(id),{status:req.body.status});
            if(req.body.status===enumType.leaveStatus.accepted){
                return res.status(_httpStatusService.status.OK).json({
                status: _httpStatusService.status.OK,
                message: "Leave Accepted.",
            });
            }else{
                return res.status(_httpStatusService.status.OK).json({
                    status: _httpStatusService.status.OK,
                    message: "Leave Rejected.",
                });
            }
        } catch (error: any) {
            return res.status(_httpStatusService.status.serverError).json({
                status: _httpStatusService.status.serverError,
                message: error.message,
            });
        }
    }

}

export const AdminLeaveController = new adminLeaveController();

