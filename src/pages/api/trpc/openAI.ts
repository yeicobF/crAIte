const axios = require('axios');

// Clave de la API de OpenAI
const openaiApiKey = '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';

// Función para generar una respuesta de ChatGPT
async function generarRespuesta(prompt: any) {
    try {
        // Realizar una solicitud POST a la API de OpenAI para generar una respuesta
        const respuesta = await axios.post(
            'https://api.openai.com/v1/engines/davinci-codex/completions',
            {
                prompt: prompt,
                max_tokens: 150,
                n: 1,
                stop: '\n',
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${openaiApiKey}`,
                },
            }
        );

        // Devolver la respuesta generada por ChatGPT
        return respuesta.data.choices[0].text;
    } catch (error) {
        console.error(error);
    }
}

// Ejemplo de uso
generarRespuesta('Hola, ¿cómo estás?').then(respuesta => {
    console.log(respuesta);
});


module.exports = {
    generarRespuesta
}


