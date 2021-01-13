import {Request, Response, RequestHandler} from "express"
import Contact, {IContact} from "../models/contact"
import { validationResult, ValidationError, Result } from "express-validator"


const craeteContact: RequestHandler = async (req: Request, res: Response) => {
  //check errors
  const errores:Result<ValidationError> = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errors: errores.array() });
  }

  try {
    //Create new Contact
    const contact: IContact = new Contact(req.body);

    //Save and Return contact
    contact.save();
    res.json(contact);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error");
  }
};

//getAllContact Return all contact in DB
const getAllContact: RequestHandler = async (req: Request, res: Response) => {
  try {
    //Get all info
    const contacts: IContact[] = await Contact.find().sort({ name: -1 });

    //return the info
    res.json({ contacts });
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error");
  }
};
const deleteContact: RequestHandler = async (req: Request, res: Response) => {
  try {
    //Get the project
    let contact: IContact = await Contact.findById(req.params.id);

    //If exists the contact
    if (!contact) {
      return res.status(404).json({ msg: "Contact not found" });
    }

    //Delete Project
    await Contact.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Contact Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error in server deleting the contact");
  }
};

export default {craeteContact, getAllContact, deleteContact}