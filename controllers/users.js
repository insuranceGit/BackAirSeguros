
const {usersModel} = require('../models')
const { handleHttpError } = require("../utils/handleError")
const { matchedData } = require( "express-validator" )
/**
 * OBTIENE LA LISTA DE LA BASE DE DATOS
 * @param {*} req 
 * @param {*} res 
 */
const getUsers = async  (req, res)=>{

    try {
        const data = await usersModel.find({});
        res.send({data})
    } catch (error) {
        return handleHttpError(res, 'ERROR GetUsers', 500);
    }
    
};


/**
 * OBTIENE UN ITEM ESPECIFICO
 * @param {*} req 
 * @param {*} res 
 */
const getUser = (req, res)=>{
    
};


/**
 * CREA UN ITEM
 * @param {*} req 
 * @param {*} res 
 */
const createUser = async(req, res)=>{
    try {
        const body  = matchedData( req )     

        const data = await usersModel.create(body)
        res.send({ data })
    } catch (error) {
        return handleHttpError(res, 'ERROR CreateUser', 500)        
    }
    
};


/**
 * ACTUALIZA UN ITEM
 * @param {*} req 
 * @param {*} res 
 */
const updateUser = (req, res)=>{};


/**
 * ELIMINA UN ITEM
 * @param {*} req 
 * @param {*} res 
 */
const deleteUser = (req, res)=>{};


module.exports = {getUsers, getUser, createUser, updateUser, deleteUser}