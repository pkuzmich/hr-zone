const ghpages = require('gh-pages')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('GitHub Pages Deployment Tool')
console.log('----------------------------')
console.log('This script will deploy your site to GitHub Pages.')
console.log('You will need to provide your GitHub username and personal access token.')
console.log('Your credentials will NOT be stored in any files.\n')

rl.question('Enter your GitHub username: ', (username) => {
  rl.question('Enter your GitHub personal access token: ', (token) => {
    rl.close()

    // Create the repository URL with authentication
    const repoUrl = `https://${username}:${token}@github.com/pkuzmich/hr-zone.git`

    console.log('\nDeploying to GitHub Pages...')

    ghpages.publish('.', {
      repo: repoUrl,
      message: 'Auto-generated commit from gh-pages',
      silent: true // Don't log the repo URL with credentials
    }, function (err) {
      if (err) {
        console.error('Error deploying to GitHub Pages:', err)
        process.exit(1)
      } else {
        console.log('Successfully deployed to GitHub Pages!')
      }
    })
  })
})