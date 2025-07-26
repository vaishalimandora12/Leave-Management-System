import jwt, { JsonWebTokenError } from "jsonwebtoken";
import { userModel } from "../model/user.model";
import "dotenv/config";

const JWT_KEY = "test";
const JWT_EXPIRY = "3d";

class jsonWebTokenService {
       createJwtToken(payload: any) {
        return jwt.sign(payload, JWT_KEY, { expiresIn: JWT_EXPIRY });
    }

    async _tokenDecode(req: any) {
        const authHeader = req.headers.authorization;
        if (!authHeader) throw { message: "Authorization is required." };

        if (!authHeader.startsWith("Bearer ")) {
            throw { message: "Invalid token format" };
        }

        const token = authHeader.split(" ")[1];
        const decode: any = jwt.verify(token, JWT_KEY);
        if (!decode) throw { message: "Invalid token" };

        const user = await userModel.findById(decode.userId);
        if (!user) throw { message: "User not found" };

        req.userInfo = user;
        return user;
    }

    async _userJwtToken(req: any) {
        const authHeader = req.headers.authorization;
        if (!authHeader) throw { message: "Authorization header is missing" };

        if (!authHeader.startsWith("Bearer ")) {
            throw { message: "Invalid token format" };
        }

        const token = authHeader.split(" ")[1];
        const decode: any = jwt.verify(token, JWT_KEY);
        if (!decode) throw { message: "Invalid token" };

        const user = await userModel.findById(decode.userId);
        if (!user) throw { message: "User not found" };

        return token;
    }
        
}

export const JsonWebTokenService = new jsonWebTokenService();
