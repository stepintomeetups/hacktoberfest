const fs = require('fs')
const path = require('path')

const maintainersFile = fs.readFileSync(path.resolve(path.join(__dirname, 'maintainers.json')), { encoding: 'utf8' })
const repositoriesFile = fs.readFileSync(path.resolve(path.join(__dirname, 'repositories.json')), { encoding: 'utf8' })

const maintainers = JSON.parse(maintainersFile)
const repositories = JSON.parse(repositoriesFile)

function mapRepositories () {
  return repositories.map(r => {
    return Object.assign({}, r, { maintainers: r.maintainers.map(m => maintainers[m]) })
  })
}

module.exports = mapRepositories
