import express, { Application as ExApplication } from "express";
import { userRoutes } from "./routes/user.routes";
import { adminRoutes } from "./routes/admin.routes";
import {JWT_token, check_active_user, check_session ,checkAdminRole} from "./middleware/checkActive.middleware";

class Application {
      private readonly _instance: ExApplication;
      get instance(): ExApplication {
            return this._instance;
      }
      constructor() {
            this._instance = express();
            this._instance.use(express.json());

            this._instance.use("/api/admin/private/", JWT_token, check_active_user, check_session, checkAdminRole)
            this._instance.use("/api/user/private/", JWT_token, check_active_user, check_session)
            this._instance.use("/api/admin/", adminRoutes);
            this._instance.use("/api/user/", userRoutes);

      
      }
}
export default new Application();
