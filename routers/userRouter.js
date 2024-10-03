import Router from "express";
import UserController from "../controllers/UserController.js";
const userRouter = new Router();

userRouter.post("/user", UserController.create);
userRouter.get('/user/:id', UserController.getUser)
userRouter.put('/user/:id', UserController.update)
userRouter.delete('/user/:id', UserController.delete)

userRouter.post('/user/find', UserController.authUser)

export default userRouter;
