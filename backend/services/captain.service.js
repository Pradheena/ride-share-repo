const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    firstname, lastname, email, password, color, plate, capacity, vehicleType
}) => {
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }
    const captain = await captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email: email.toLowerCase(),
        password, // Relies on pre('save') hook for hashing
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    });
    return captain;
};