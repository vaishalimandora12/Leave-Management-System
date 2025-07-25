import { JsonWebTokenService } from '../services/jwt.service';
import { SessionService } from '../services/session.service';
import { _httpStatusService } from '../utils/_httpStatus';
import { UserService } from '../services/user.service';
import { enumType } from '../utils/enum';

export const check_session = async (req, res, next) => {
    try {
        const accessToken = await JsonWebTokenService._userJwtToken(req);
        const check_user = await JsonWebTokenService._tokenDecode(req);

        if (!check_user) {
            return res.status(_httpStatusService.status.Unauthorized).json({ status: _httpStatusService.status.Unauthorized, message: "Invalid token" });
        }

        if (check_user.status === "blocked") {
            await SessionService.deleteSession({ _id: accessToken._id });
            return res.status(_httpStatusService.status.Unauthorized).json({
                status: _httpStatusService.status.Unauthorized,
                message: "Your account has been blocked.",
            });
        }

        const session = await SessionService.findOne({ accessToken });
        if (!session) {
            return res.status(_httpStatusService.status.Unauthorized).json({ status: _httpStatusService.status.Unauthorized, message: "Session expired!" });
        }

        next();
    }  catch (error: any) {
        return res.status(_httpStatusService.status.serverError).json({  
            status: _httpStatusService.status.serverError,
            message: error.message,
        });
    }
};

export const check_active_user = async (req, res, next) => {
    try {
        const accessToken = await JsonWebTokenService._tokenDecode(req);

        if (!accessToken) {
            return res.status(_httpStatusService.status.Unauthorized).json({ status: _httpStatusService.status.Unauthorized, message: "Invalid token" });
        }

        if (accessToken.status === enumType.BlockStatus.blocked) {
            await SessionService.deleteSession({ _id: accessToken._id });
            return res.status(_httpStatusService.status.Unauthorized).json({
                status: _httpStatusService.status.Unauthorized,
                message: "Your account has been blocked. Please contact support for assistance.",
            });
        }

        next();
    }  catch (error: any) {
            return res.status(_httpStatusService.status.serverError).json({  
            status: _httpStatusService.status.serverError,
            message: error.message,
        });
    }
};

export const JWT_token = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        console.log(token)
        if (!token) {
            return res.status(_httpStatusService.status.Unauthorized).json({ status: _httpStatusService.status.Unauthorized, message: "Authorization is required" });
        }
        
        await JsonWebTokenService._tokenDecode(req);
        next();
    }  catch (error: any) {
            return res.status(_httpStatusService.status.serverError).json({  
            status: _httpStatusService.status.serverError,
            message: error.message,
        });
    }
};

export const checkAdminRole =async (req, res, next) => {
    const accessToken = await JsonWebTokenService._tokenDecode(req);
    console.log(accessToken,"sssssssssssss")
    if (accessToken.role !== "admin") {
        return res.status(_httpStatusService.status.NotFound).json({ status: _httpStatusService.status.NotFound, message: "Access denied. Admin only." });
    }
    next();
};
