const getDate = ((_req, _res, next) => {
    const date = new Date()
    console.log(`Fecha y Hora de la petición: ${date}`)
    next()
})

export default getDate;
