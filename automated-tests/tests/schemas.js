const Joi = require("joi");

const id = Joi.number().integer()
const name = Joi.string()
const category = Joi.object().keys({
    id: Joi.number().integer(),
    name: Joi.string(),
  })
const photoUrls = Joi.array().items(Joi.string())
const tags = Joi.array().items({
      id: Joi.number().integer(),
      name: Joi.string(),
    })

const status = Joi.string().valid("available", "pending", "sold")

const findPetByStatuSchema = Joi.array().items({
    id: id,
    name: name.required(),
    category: category,
    photoUrls: photoUrls.required(),
    tags: tags,
    status: status,
  });

  const userInfo = Joi.object().keys({
    id: id,
    username: name,
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string(),
    phone: Joi.number().integer(),
    userStatus: Joi.number().positive(),
  });

  

module.exports = {
    '/pet/findByStatus': findPetByStatuSchema,
    '/user': userInfo,
};