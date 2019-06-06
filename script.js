const ghpages = require('gh-pages')
const chalk = require('chalk')

let publishOpts = {
  add: true
  // push: false
}
publishOpts = {
  ...publishOpts,
  silent: false,
  message: 'Deployed to Github Pages',
  user: 'Travis-CI',
  email: 'travis@travis',
  repo:
    'https://' +
    process.env.GH_TOKEN +
    '@github.com/' +
    process.env.TRAVIS_REPO_SLUG +
    '.git'
}

console.log('publishOpts=', JSON.stringify(publishOpts, null, 2))
function run() {
  return new Promise((resolve, reject) => {
    console.log('start run')
    ghpages.publish('web_deploy', publishOpts, function(err) {
      if (err) {
        console.log(chalk.red('Deploy failed: ') + err)
        return reject(err)
      }
      console.log(chalk.green('🎉  Deployed uccessfully!'))
      resolve()
    })
  })
}

run()
  .then(() => console.log('eieiei'))
  .catch(err => console.log(err))

setTimeout(() => {
  console.log('waiting 5 sec')
}, 5000)
