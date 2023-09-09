const axios = require('axios');

// Контроллеры для обработки запросов /user
const blockUsersDetailController = async (req, res) => {
    const blockId = req.params.id;
    try{
        const response = await axios.get(`http://127.0.0.1:8000/users/${blockId}/`);
        const dataFromDjango = response.data;
        res.json(dataFromDjango);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const blockUsers = async (req, res) => {
    try{
        const response = await axios.get('http://127.0.0.1:8000/users/');
        const dataFromDjango = response.data;
        res.json(dataFromDjango);

    } catch (error) {
        console.error(error);
        res.status(500).json( { error: 'Internal Server Error'});
    }
};

module.exports = { blockUsersDetailController, blockUsers}