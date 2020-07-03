module.exports = {
  title: 'PaperBoard',
  description: 'Notes for paper',
  base: '/paperboard',
  themeConfig: {
    // logo?: string,
    nav: {
      text: 'Github',
      target: 'https://cattidea.github.io/paperboard',
    },
    sidebar: 'auto',
    search: {
      maxSuggestions: 5,
      placeholder: 'Type to search'
    },
    editLink: {
      repo: 'cattidea/paperboard',
      dir: 'docs',
      branch: 'master',
      text: 'Edit in Github',
    },
    lastUpdated: 'Last updated',
    prevLink: false,
    nextLink: false,
  }
}
