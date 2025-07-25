import { adminSignup ,adminLogin, addAgent, leavestausUpdate} from "./adminVaildation";
import { userLogin ,applyLeave } from "./userValidation";



export const user = {
    userLogin,
    applyLeave
};


export const admin = {
    adminSignup,
    adminLogin,
    addAgent,
    leavestausUpdate
};