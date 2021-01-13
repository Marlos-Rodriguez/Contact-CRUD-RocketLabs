import {Router} from "express"

import contactController from "../controllers/contactController" 

const router: Router = Router();

//Create new Contact
router.post("/", contactController.craeteContact);

//Get all Contacts
router.get("/all", contactController.getAllContact);

//Delete One Contact
router.delete("/:id", contactController.deleteContact);

export default router;
