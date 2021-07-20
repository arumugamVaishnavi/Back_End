//libraries
const express = require('express')
const Router = express.Router()
const { v4: uuidv4 } = require('uuid')

//JSfiles
const usersModel = require('../model/usersSchema')
let products = []
