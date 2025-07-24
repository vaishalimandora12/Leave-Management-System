import { AdminAuthenticationController } from "./admin/authentication";
import { UserAuthenticationController } from "./user/authentication.controller";
import { AdminUserController } from "./admin/user.controller"

export const admin = {
    AdminAuthenticationController,
    AdminUserController
};

export const user = {
    UserAuthenticationController,
};
