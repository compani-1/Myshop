const axios = require('axios');

// Контроллеры для обработки запросов /titles
const blockDetailController = async (req, res) => {
    const blockId = req.params.id;
    try {
        const response = await axios.get(`http://127.0.0.1:8000/titles/${blockId}/`);
        const dataFromDjango = response.data;
        res.json(dataFromDjango);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const blockController = async (req, res) => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/titles/');
        const dataFromDjango = response.data;
        res.json(dataFromDjango);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { blockController, blockDetailController };