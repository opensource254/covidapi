const axios = require('axios');
const Hospital = require('../models/hospModel');
require('dotenv').config();

const url = process.env.HOSPITAL_URL;

(async function saveHospitals() {
    const rawHospitals = await axios.get(url);
    const allHospitals = await rawHospitals.data.features;
    allHospitals.map((hosp) => {
        return Hospital.create({
            title: hosp.attributes.F_NAME,
            lat: hosp.attributes.Latitude,
            lon: hosp.attributes.Longitude,
            description: hosp.attributes.F_NAME,
            open: true,
        });
    });
})();
