const Dev = require('../models/Dev');
const parseStringAsArray = require('../Utils/ParseStringAsArray');

module.exports = {
    async index(request, response){
        //Buscar todos os devs num raio de 10km
        //filtrar por tecnologia
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            //nota uma boa maneira de fazer filtro é utilizando o $in pois o parametro que vem depois
            //estará contido dentro da busca, pois é um operador logico do mongo, ver na doc do mongo
            techs: {
                $in: techsArray,
            },
            location: {
                $near:{
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        })

        return response.json({ devs })

    }
}