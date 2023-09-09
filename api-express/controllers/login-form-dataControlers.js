const axios = require('axios');

// Контроллеры для обработки запросов /login-form-data
const blockLogoFormDataDetailControlller  = async (req, res) => {
    const blockId = req.params.id;
    try {
        const response = await axios.get(`http://127.0.0.1:8000/login-form-data/${blockId}/`);
        const dateFromDjango = response.data;
        res.json(dateFromDjango);
    } catch (error) {
        console.error(error);
        res.status(500).json( {error: 'Internal Server Error' } );
    }
};


const blockLogogFormData = async (req, res) => {
    try{
        const response = await axios.get('http://127.0.0.1:8000/login-form-data/');
        const dataFromDjango = response.data;
        res.json(dataFromDjango);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
};

module.exports = { blockLogoFormDataDetailControlller, blockLogogFormData };