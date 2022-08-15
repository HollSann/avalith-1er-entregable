const getDate = ((_req, _res, next) => {
    const date = new Date()
    console.log(`Request received at: ${date}`)
    next()
})

export default getDate;
