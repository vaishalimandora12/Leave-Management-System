import { check } from "express-validator";
import { enumType } from "../utils/enum";
import { _infoMessaage } from "../utils/responseMessage";
import { UserService } from "../services/user.service";
import bcryptjs from "bcryptjs";

export const adminSignup = [
    check("firstName")
        .notEmpty().withMessage(_infoMessaage.required())
        .isAlpha().withMessage("First name must contain only letters"),

    check("lastName")
        .notEmpty().withMessage(_infoMessaage.required())
        .isAlpha().withMessage("Last name must contain only letters"),

    check("deviceToken")
        .notEmpty().withMessage(_infoMessaage.required()),

    check("deviceType")
        .notEmpty().withMessage(_infoMessaage.required())
        .isIn([enumType.deviceType.android, enumType.deviceType.ios,enumType.deviceType.web])
        .withMessage("Invalid device type. Allowed values: 'android', 'ios','web'"),

    check("deviceName")
        .notEmpty().withMessage(_infoMessaage.required()),
    check("email")
        .notEmpty().withMessage(_infoMessaage.required())
        .isEmail().withMessage("Invalid email format")
        .custom(async (value: string, { req }) => {
            let email = req.body.email;
            return await UserService.findOne({ email: email})
                .then((data: any) => {
                    if (data) {
                        throw new Error("Email already exists");
                    }
                });
        }),

    check("password")
        .notEmpty().withMessage(_infoMessaage.required())
];



export const adminLogin = [
    check("email")
        .notEmpty().withMessage(_infoMessaage.required())
        .isEmail().withMessage("Invalid email format")
        .custom(async (value: string, { req }) => {
            let email = req.body.email;
            const user = await UserService.findOne({ email: email, role: enumType.role.admin });
            if (!user) {
                throw new Error("Email not found");
            }
        }),
    
    check("password")
        .notEmpty()
        .custom(async (value, { req }) => {
            const email = req.body.email.toLowerCase();
            const user = await UserService.findOne({ email:email });
            if (!user) {
                throw new Error("Invalid email or password");
            }

            const isPasswordValid = await bcryptjs.compare(value, user.password);
            if (!isPasswordValid) {
                throw new Error("Invalid Password");
            }
        }),

    check("deviceToken")
        .notEmpty().withMessage(_infoMessaage.required()),

    check("deviceType")
        .notEmpty().withMessage(_infoMessaage.required())
        .isIn([enumType.deviceType.android, enumType.deviceType.ios,enumType.deviceType.web])
        .withMessage("Invalid device type. Allowed values: 'android', 'ios','web'"),

    check("deviceName")
        .notEmpty().withMessage(_infoMessaage.required())
];


export const addAgent = [
    check("firstName")
        .notEmpty().withMessage(_infoMessaage.required())
        .isAlpha().withMessage("First name must contain only letters"),

    check("lastName")
        .notEmpty().withMessage(_infoMessaage.required())
        .isAlpha().withMessage("Last name must contain only letters"),

    check("email")
        .notEmpty().withMessage(_infoMessaage.required())
        .isEmail().withMessage("Invalid email format")
        .custom(async (value: string, { req }) => {
            let email = req.body.email;
            return await UserService.findOne({ email: email})
                .then((data: any) => {
                    if (data) {
                        throw new Error("Email already exists");
                    }
                });
        }),

    check("password")
        .notEmpty().withMessage(_infoMessaage.required())
];

export const leavestausUpdate = [
    check("status")
        .notEmpty().withMessage(_infoMessaage.required())
        .isIn([enumType.leaveStatus.accepted, enumType.leaveStatus.rejected])
        .withMessage("Invalid staus. Allowed values:'accepted','rejected'"),

];