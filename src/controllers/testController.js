const connection = require("../database/connection")

const testConnection = async ( req, res ) => {

    try {
        await connection.raw("SELECT 1+1 as result")

    return res.json({messege: "Banco conectado com sucesso :)"})   

    } catch (error) {
    return res.json({messege: "Erro ao conectar com o banco :("}) 
        
    }
    
}

module.exports = {
    testConnection
}