
const { load_massivesModel } = require('../models')
const { handleHttpError } = require("../utils/handleError")
const { matchedData } = require( "express-validator" )
/**
 * OBTIENE LA LISTA DE LA BASE DE DATOS
 * @param {*} req 
 * @param {*} res 
 */
const getAll = async  (req, res)=>{
    try {
        const data = await load_massivesModel.find({});
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
const getById = async(req, res)=>{
    try{
        const {id} = req;
        const data = await load_massivesModel.findOneData(id);
        res.send({ data });
    }catch(e){
        handleHttpError(res,"ERROR_GET_ITEM")
    }   
};


/**
 * CREA UN ITEM
 * @param {*} req 
 * @param {*} res 
 */
const createMassive = async(req, res)=>{
    try {
        const { body }  =  req   
        console.log(body);
        const data = await load_massivesModel.create(body)
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


module.exports = {getAll, getById, createMassive, update, deletes}