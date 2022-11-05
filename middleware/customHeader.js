const customHeader = (req,res,next) =>{
    try {
        const apiKey = req.headers.api_key;

        if( apiKey === "jairo"){
            next();
        }else{
            res.status(403)
            res.send({error:"API_KEY No valida"})
        }
        
    } catch (error) {
        res.status(403)
        res.send({error:"Error en el Header"})
    }
}

module.exports = customHeader