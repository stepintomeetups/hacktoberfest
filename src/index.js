const path = require('path')
const fs = require('fs')

const OUTPUT_DIRECTORY = path.join(__dirname, '..', 'public')

const data = require('./data')

;(function main() {
  const page = html()

  fs.writeFileSync(path.join(OUTPUT_DIRECTORY, 'index.html'), page)

  fs.copyFileSync(path.join(__dirname, 'main.css'), path.join(OUTPUT_DIRECTORY, 'main.css'))
})()

function html() {
  return `
    <!doctype html>
    <html lang="hu-HU">
      ${head()}
      ${body()}
    </html>
    `
}

function head() {
  return `
    <head>
        <title>Step into Open Source</title>

        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet"> 

        <link rel="stylesheet" href="main.css" />
    </head>`
}

function body() {
  return `
    <body>
        <main>
            <div class="landing">
              <div class="logo">
                <img src="szakmai-css-munka.png" />
              </div>
            </div>

            <div class="content">
              <div class="boxes">
                <a href="https://www.facebook.com/events/333876941022112" class="box">
                    <div class="box-wrapper">
                        <div class="box-image">
                            <img src="facebook.png" />
                        </div>
                        <div class="box-details">
                            <div class="box-title">
                            Step into Open Source // SiM 2020/10 // Hacktoberfest 2020
                            </div>
                            <div class="box-date">
                            2020. 10. 26. 19:00
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://twitch.tv/stepintomeetups" class="box">
                    <div class="box-wrapper">
                        <div class="box-image">
                            <img src="twitch.png" />
                        </div>
                        <div class="box-details">
                            <div class="box-title">
                            Step into Meetups Twitch Csatorna
                            </div>
                            <div class="box-date">
                            Élő Stream
                            </div>
                        </div>
                    </div>
                </a>
              </div>

              ${data.repositories.map(repository).join('')}
            </div>
        </main>
    </body>`
}

function repository(repo) {
  return `
        <div class="repository">
          <div class="repository-title">
            <a href="https://github.com/${repo.owner}">
              ${
                repo.showLogo
                  ? `
                <div class="repository-title-image-parent">
                  <img src="${repo.owner}.png" class="repository-title-image"/>
                </div>
              `
                  : ``
              }
            </a>
            <h4>
                <a href="https://github.com/${repo.owner}/${repo.project}">${repo.owner}/${repo.project}</a>
            </h4>
          </div>
          <div class="repository-topics">
            ${repo.topics.map((t) => `<span>${t}</span>`).join('')}
          </div>
          <div class="repository-description">
            <p>${repo.description}</p>
          </div>
          <div class="repository-maintainers">
            <h5>Akiktől segítséget kérhetsz</h5>
            ${repositoryMaintainerList(repo)}
          </div>

          ${issues(repo)}
        </div>
    `
}

function repositoryMaintainerList(repo) {
  const maintainers = repo.maintainers.map((username) => {
    return Object.assign({}, data.maintainers[username], { username })
  })

  return `
    <div class="repository-maintainer-list">
        ${maintainers
          .map((m) => {
            return `
                <div class="repository-maintainer">
                    <div class="repository-maintainer-image">
                      <img src="${m.image}" />
                    </div>
                    <div class="repository-maintainer-information">
                      <div class="repository-maintainer-top">
                        <div class="repository-maintainer-name">
                            ${m.name}
                        </div>
                        <div class="repository-maintainer-email">
                            ${m.email}
                        </div>
                      </div>
                      <div class="repository-maintainer-bottom">
                        <a href="${m.github}">
                          <img src="github.svg" />
                        </a>
                        <a href="${m.linkedin}">
                          <img src="linkedin.svg" />
                        </a>
                      </div>
                    </div>
                </div>
            `
          })
          .join('')}
    </div>
    `
}

function issues(repo) {
  return `
    <div class="issues">
    ${repo.issues
      .map((i) => {
        return `
          <div class="issue">
            <div class="issue-title">
              <h5>
                <a href="https://github.com/${repo.owner}/${repo.project}/issues/${i.number}">
                  <span class="issue-title-number">
                    #${i.number}
                  </span>
                  <span class="issue-title-text">
                    ${i.title}
                  </span>
                </a>
              </h5>
            </div>
            <div class="issue-description">
              <p>${i.description}</p>
            </div>
          </div>
        `
      })
      .join('')}
    </div>
    `
}
