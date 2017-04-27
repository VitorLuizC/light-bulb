export const state = {
  app: {
    name: 'Light Bulb',
    logo: '//img/logo.png'
  },
  owner: {
    name: 'Vitor Cavalcanti',
    link: 'https://vitorluizc.github.io/',
    year: 2017
  }
}

export const getters = {
  app: ({ app }) => app,
  owner: ({ owner }) => owner
}
