const dataMap = require("./dataMap.js")

module.exports = {
  locals: {
    repositories: dataMap()
  }
}
