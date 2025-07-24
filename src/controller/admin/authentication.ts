import mongoose from 'mongoose';
import { Request, Response } from "express";
import { JsonWebTokenService } from "../../services/jwt.service";
import { _httpStatusService } from "../../utils/_httpStatus";
import { UserService } from "../../services/user.service";
import { SessionService } from "../../services/session.service";
import { enumType } from "../../utils/enum";


class adminAuthenticationController {

        async adminSignUp(req: any, res: Response) {
        try {
            const { firstName, lastName, password, email, deviceToken, deviceType, deviceName } = req.body;

            const refData = {
                role: enumType.role.admin,
                firstName: firstName,
                lastName: lastName,
                password: password,
                email: email,
            };
            let adminData = await UserService.create(refData);

            let accessToken: any = await JsonWebTokenService.createJwtToken({
                userId: adminData._id,
                email: adminData.email,
                deviceToken: deviceToken,
            });

            await SessionService.create({
                deviceToken: deviceToken,
                deviceType: deviceType,
                deviceName: deviceName,
                accessToken: accessToken,
                userId: adminData._id,
            });
     
            return res.status(_httpStatusService.status.OK).json({
                status: _httpStatusService.status.OK,
                message: "Register successfully",
                data: {
                    admin: adminData,
                    accessToken: accessToken, 
                },
            });
        } catch (error: any) {
            return res.status(_httpStatusService.status.serverError).json({
                status: _httpStatusService.status.serverError,
                message: error.message,
            });
        }
    }

    async adminSignIn(req: Request, res: Response){
        try {
            const payload = req.body;
            let data = await UserService.findOne({ email: payload.email });
            await SessionService.deleteFirstSessionAdmin(data._id);
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
                    admin: data,
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

export const AdminAuthenticationController = new adminAuthenticationController();

