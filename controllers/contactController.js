const Contact = require("../models/contact");
const { validationResult } = require("express-validator");

exports.craeteContact = async (req, res) => {
  //check errors
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errors: errores.array() });
  }

  try {
    //Create new Contact
    const contact = new Contact(req.body);

    //Save and Return contact
    contact.save();
    res.json(contact);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error");
  }
};

//getAllContact Return all contact in DB
exports.getAllContact = async (req, res) => {
  try {
    //Get all info
    const contacts = await Contact.find().sort({ name: -1 });

    //return the info
    res.json({ contacts });
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error");
  }
};
exports.deleteContact = async (req, res) => {
  try {
    //Get the project
    let contact = await Contact.findById(req.params.id);

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
