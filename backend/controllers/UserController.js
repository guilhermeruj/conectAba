const User = require('../models/User')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

// helpers
const createUserToken = require("../helpers/create-user-token")
const getToken = require('../helpers/get-token')

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
    if(req.headers.authorization){
      const token = getToken(req)
      const decoded = jwt.verify(token, 'nossosecret')

      currentUser = await User.findByPk(decoded.id)

      currentUser.password = undefined

    }else{
      currentUser = null
    }
    res.status(200).send(currentUser)
  }

  static async getUserById(req, res){
    const id = req.params.id
    
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] }
    });

    if(!user){
      res.status(422).json({
        message: 'Usuário não encontrado!'
      })
    }
    res.status(200).json({ user })
  }

  static async editUser(req, res){
    res.status(200).json({
      message: 'Deu certo o update'
    })
  }

  static async register(req, res){
    const { name, cpf, rg, cnpj, fone, email, registro, diplomas, certificado, cartaovacina, contatoemergencia, contratos, password, confirmpassword, nivel} = req.body
    if(!name){
      res.status(422).json({message: 'O nome é obrigatorio'})
      return
    }
    if(!fone){
      res.status(422).json({message: 'O Telefone é obrigatorio'})
    }
    if(!email){
      res.status(422).json({message: 'O email é obrigatorio'})
      return
    }
    if(!password){
      res.status(422).json({message: 'O password é obrigatorio'})
      return
    }
    if(!nivel){
      res.status(422).json({message: 'O nivel é obrigatorio'})
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
      cnpj,
      fone,
      email,
      registro,
      diplomas,
      certificado,
      cartaovacina,
      contatoemergencia,
      contratos,
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