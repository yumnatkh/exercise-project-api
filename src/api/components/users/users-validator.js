const Joi = require('joi');

module.exports = {
  createUser: {
    body: {
      name: Joi.string().min(1).max(100).required().label('Name'),
      email: Joi.string().email().required().label('Email'),
      password: Joi.string().min(6).max(32).required().label('Password'),
      password_confirm: Joi.string()
        .valid(Joi.ref('password'))
        .required()
        .label('Password Confirmation'),
    },
  },

  updateUser: {
    body: {
      name: Joi.string().min(1).max(100).required().label('Name'),
      email: Joi.string().email().required().label('Email'),
    },
  },

  changePassword: {
    body: {
      oldPassword: Joi.string().required().label('Old Password'),
      newPassword: Joi.string().min(6).max(32).required().label('New Password'),
      confirmPassword: Joi.string()
        .valid(Joi.ref('newPassword'))
        .required()
        .label('Confirm Password'),
    },
  },
};
