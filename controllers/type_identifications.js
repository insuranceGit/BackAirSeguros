
const { type_identificationsModel } = require('../models')
const { handleHttpError } = require("../utils/handleError")
const { matchedData } = require( "express-validator" )
/**
 * OBTIENE LA LISTA DE LA BASE DE DATOS
 * @param {*} req 
 * @param {*} res 
 */
const getAll = async  (req, res)=>{
    try {
        const data = await type_identificationsModel.find({});
        res.send({data})
    } catch (error) {
        return handleHttpError(res, 'ERROR GetTipoIdentificacion', 500);
    }
    
};


/**
 * OBTIENE UN ITEM ESPECIFICO
 * @param {*} req 
 * @param {*} res 
 */
const getById = (req, res)=>{
    
};


/**
 * CREA UN ITEM
 * @param {*} req 
 * @param {*} res 
 */
const createIdentification = async(req, res)=>{
    try {
        const { body }  =  req   
        const data = await type_identificationsModel.create(body)
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
const update = (req, res)=>{};


/**
 * ELIMINA UN ITEM
 * @param {*} req 
 * @param {*} res 
 */
const deletes = (req, res)=>{};


module.exports = {getAll, getById, createIdentification, update, deletes}