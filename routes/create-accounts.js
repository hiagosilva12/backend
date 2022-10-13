const express = require("express");
const router = express.Router();
const Account = require("../models/account");
const bcrypt = require("bcryptjs");

// routes

router.post("/create-account", async (req, res) => {
  const { name, surname, role, companyName, cpf, email, password } = req.body;

  const account = await Account.findOne({ where: { email } });

  if (account) {
    return res.status(400).send({ error: "Email já cadastrado" });
  } else {
    const hash = await bcrypt.hash(password, 10);

    const newAccount = await Account.create({
      name,
      surname,
      role,
      companyName,
      cpf,
      email,
      password: hash,
    });

    return res.status(200).send({ newAccount });
  }
});

module.exports = router;
