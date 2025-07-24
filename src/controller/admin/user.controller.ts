import mongoose from 'mongoose';
import { Request, Response } from "express";
import { JsonWebTokenService } from "../../services/jwt.service";
import { _httpStatusService } from "../../utils/_httpStatus";
import { UserService } from "../../services/user.service";
import { SessionService } from "../../services/session.service";
import { enumType } from "../../utils/enum";


class adminUserController {

    async addAgent(req: any, res: Response) {
        try {
            const { firstName, lastName, password, email } = req.body;

            const refData = {
                role: enumType.role.agent,
                firstName: firstName,
                lastName: lastName,
                password: password,
                email: email,
            };
            let userData = await UserService.create(refData);
     
            return res.status(_httpStatusService.status.OK).json({
                status: _httpStatusService.status.OK,
                message: "New Agent Added successfully.",
                data: userData
            });
        } catch (error: any) {
            return res.status(_httpStatusService.status.serverError).json({
                status: _httpStatusService.status.serverError,
                message: error.message,
            });
        }
    }

}

export const AdminUserController = new adminUserController();

