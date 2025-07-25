import { Router } from "express";
import { errorResponse } from "../middleware/validation-error.middleware";
import * as validations from "../validations/_index";
import * as controllers from "../controller/_index";

const router: Router = Router();

export const adminRoutes = [
    // Authentication
    router.post("/signUp", validations.admin.adminSignup,errorResponse,controllers.admin.AdminAuthenticationController.adminSignUp),
    router.post("/login",validations.admin.adminLogin,errorResponse, controllers.admin.AdminAuthenticationController.adminSignIn),

    // User Management
    router.post("/private/addAgent", validations.admin.addAgent,errorResponse,controllers.admin.AdminUserController.addAgent),
    router.post("/private/getAllAgents",controllers.admin.AdminUserController.getAllAgents),

    // Leave Management
    router.get("/private/allLeaveRequests",controllers.admin.AdminLeaveController.allLeaveRequests),
    router.put("/private/changeLeaveStatus/:leaveId",validations.admin.leavestausUpdate,errorResponse,controllers.admin.AdminLeaveController.changeLeaveStatus)

];
