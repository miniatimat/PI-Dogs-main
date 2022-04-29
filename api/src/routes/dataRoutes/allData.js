const getApiData = require("./apiData")
const getDbData = require("./dbData")

const getAllData = async ()=>{
    const [apiData, dbData] = await Promise.all([getApiData(), getDbData()])
    const allData = apiData.concat(dbData)
    return allData
}

module.exports = {getAllData}