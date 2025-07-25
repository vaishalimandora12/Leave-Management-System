import mongoose from 'mongoose';
import { Request, Response } from "express";
import { JsonWebTokenService } from "../../services/jwt.service";
import { _httpStatusService } from "../../utils/_httpStatus";
import  { LeaveService } from "../../services/leave.service";
import { enumType } from "../../utils/enum";


class leaveController {

    async applyLeave(req: any, res: Response) {
        try {
            const accessToken = await JsonWebTokenService._tokenDecode(req);
            console.log(accessToken,"teettssttt")
            const payload:any = req.body;

            const refData = {
                userId:accessToken._id,
                role: enumType.role.agent,
                fromDate: payload.fromDate,
                toDate: payload.toDate,
                reason: payload.reason,
            };
            let data = await LeaveService.create(refData);
     
            return res.status(_httpStatusService.status.OK).json({
                status: _httpStatusService.status.OK,
                message: "Leave apply successfully.",
                data: data
            });
        } catch (error: any) {
            return res.status(_httpStatusService.status.serverError).json({
                status: _httpStatusService.status.serverError,
                message: error.message,
            });
        }
    }

    async viewAllLeaves(req: any, res: Response) {
        try {
            const accessToken = await JsonWebTokenService._tokenDecode(req);
            let data = await LeaveService.find({userId:accessToken._id});
            if(data.length>0){
                return res.status(_httpStatusService.status.OK).json({
                    status: _httpStatusService.status.OK,
                    message: "successs.",
                    data: data
                });
            }else{
                return res.status(_httpStatusService.status.OK).json({
                status: _httpStatusService.status.OK,
                message: "No leave request found.",
            }); 
            }
        } catch (error: any) {
            return res.status(_httpStatusService.status.serverError).json({
                status: _httpStatusService.status.serverError,
                message: error.message,
            });
        }
    }

    async viewLeave(req: any, res: Response) {
        try {
            const accessToken = await JsonWebTokenService._tokenDecode(req);
            const id =req.params.leaveId
            let data = await LeaveService.findOne({userId:accessToken._id,_id:new mongoose.Types.ObjectId(id)});
            if(data){
                return res.status(_httpStatusService.status.OK).json({
                    status: _httpStatusService.status.OK,
                    message: "successs.",
                    data: data
                });
            }else{
                return res.status(_httpStatusService.status.NotFound).json({
                status: _httpStatusService.status.NotFound,
                message: "Invalid Requesst",
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

export const LeaveController = new leaveController();

