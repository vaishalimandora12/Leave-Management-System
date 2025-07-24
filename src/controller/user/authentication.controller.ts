import mongoose from 'mongoose';
import { Request, Response } from "express";
import { JsonWebTokenService } from "../../services/jwt.service";
import { _httpStatusService } from "../../utils/_httpStatus";
import { UserService } from "../../services/user.service";
import  { SessionService } from "../../services/session.service";
import { enumType } from "../../utils/enum";


class userAuthenticationController {
    async signIn(req: Request, res: Response){
        try {
            const payload = req.body;
            let data = await UserService.findOne({ email: payload.email,role:enumType.role.agent });
            let accessToken: any = await JsonWebTokenService.createJwtToken({
                userId: data._id,
                email: data.email,
                deviceToken: payload.deviceToken,
            });
            await SessionService.create({
                deviceToken: payload.deviceToken,
                deviceType: payload.deviceType,
                deviceName: payload.deviceName,
                accessToken: accessToken,
                userId: data._id,
            });
    
            return res.status(_httpStatusService.status.OK).json({
                status: _httpStatusService.status.OK,
                message:  "login successfully",
                data: {
                    user: data,
                    accessToken: accessToken, 
                },
            });
        } catch (error: any) {
            return res.status(_httpStatusService.status.serverError).json({
                status: _httpStatusService.status.serverError,
                message: error.message,
            });
        }
    };

}

export const UserAuthenticationController = new userAuthenticationController();

