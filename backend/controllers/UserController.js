const User = require('../models/User')
const bcrypt = require("bcryptjs");
const createUserToken = require("../helpers/create-user-token")

module.exports = class UserController{
  static async login(req, res){
    const {email, password} = req.body;

    if(!email){
      res.status(422).json({ message: 'O e-mail é obrigatorio'})
      return
    }
    if(!password){
      res.status(422).json({message: 'A senha é obrigatório'})
      return
    }
    // check if user exists
    const user = await User.findOne({ where: { email: email } });

    if(!user){
      res.status(422).json({
        message: "Usuário não cadastrado"
      })
      return
    }
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      res.status(422).json({ message: "Senha Inválida"});
      return;
    }
    await createUserToken(user, req, res)
  }

  static async checkUser(req, res){
    let currentUser 
    console.log(req.headers.authorization)
    if(req.headers.authorization){

    }else{
      currentUser = null
    }
    res.status(200).send(currentUser)
  }


  static async register(req, res){
    const { name, cpf, rg, telefone, email, password, confirmpassword, nivel} = req.body
    if(!name){
      res.status(422).json({message: 'O nome é obrigadorio'})
      return
    }
    if(!cpf){
      res.status(422).json({message: 'O cpf é obrigadorio'})
      return
    }
    if(!rg){
      res.status(422).json({message: 'O rg é obrigadorio'})
      return
    }
    if(!telefone){
      res.status(422).json({message: 'O telefone é obrigadorio'})
      return
    }
    if(!email){
      res.status(422).json({message: 'O email é obrigadorio'})
      return
    }
    if(!password){
      res.status(422).json({message: 'O password é obrigadorio'})
      return
    }
    if(!nivel){
      res.status(422).json({message: 'O nivel é obrigadorio'})
      return
    }
    if(password !== confirmpassword){
      res.status(422).json({message: 'As senhas não conferem'})
    }

     // check if user exists
     const userExist = await User.findOne({ email: email})
     if(userExist){
      res.status(422).json({message: 'Email já cadastrado selecione outro'})
      return
     }

    // create a password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassaword = bcrypt.hashSync(password, salt);

    const user = {
      name,
      cpf,
      rg,
      telefone,
      email,
      password: hashedPassaword,
      nivel,
    };
    try {
      await User.create(user);
      res.status(201).json({
        message: 'Usuário criado'
      })
    } catch (err) {
      res.status(500).json({message: err})
    }
  }
}