import { AdminAuthenticationController } from "./admin/authentication";
import { UserAuthenticationController } from "./user/authentication.controller";
import { AdminUserController } from "./admin/user.controller";
import { LeaveController } from "./user//leave.controller";
import { AdminLeaveController } from "./admin/leaveController";

export const admin = {
    AdminAuthenticationController,
    AdminUserController,
    AdminLeaveController
};

export const user = {
    UserAuthenticationController,
    LeaveController
};
