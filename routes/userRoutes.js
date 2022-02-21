import { Router } from "express";
import { 
    userSigninController, 
    userSignupController
} from '../controllers/userControllers.js'

const router = Router();
router.post('/signup',userSignupController);

router.post('/signin',userSigninController);

export default router;