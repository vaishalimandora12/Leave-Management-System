import { Router } from "express";
import { errorResponse } from "../middleware/validation-error.middleware";
import * as validations from "../validations/_index";
import * as controllers from "../controller/_index";

const router: Router = Router();

export const userRoutes = [
    // Authentication
    router.post("/login", validations.user.userLogin,errorResponse,controllers.user.UserAuthenticationController.signIn),

    // leave Management
    router.post("/private/applyLeave", validations.user.applyLeave,errorResponse,controllers.user.LeaveController.applyLeave),
    router.get("/private/myAllLeaveRequests",controllers.user.LeaveController.viewAllLeaves),
    router.get("/private/myLeave/:leaveId",controllers.user.LeaveController.viewLeave),

];
