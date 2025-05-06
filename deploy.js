const ghpages = require('gh-pages')

// Use basic GitHub URL - no credentials in code
const repoUrl = 'https://github.com/pkuzmich/hr-zone.git'

console.log('Deploying to GitHub Pages...')

ghpages.publish('.', {
  message: 'Auto-generated commit from gh-pages'
}, function (err) {
  if (err) {
    console.error('Error deploying to GitHub Pages:', err)
    process.exit(1)
  } else {
    console.log('Successfully deployed to GitHub Pages!')
  }
}) 