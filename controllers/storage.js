
const {storageModel} = require('../models');
const { fields } = require('../utils/handleStorage');
const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * OBTIENE LA LISTA DE LA BASE DE DATOS
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async  (req, res)=>{
    const data = await storageModel.find({});
    res.send({data})
};



/**
 * OBTIENE UN ITEM ESPECIFICO
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res)=>{
    
};

/**
 * CREA UN ITEM
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async(req, res)=>{
    const { file } = req
    const fileData ={
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({ data })
};

/**
 * ACTUALIZA UN ITEM
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res)=>{};

/**
 * ELIMINA UN ITEM
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res)=>{};


module.exports = {getItems, getItem, createItem, updateItem, deleteItem}