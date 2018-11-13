module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'NUXT',
      script: 'cross-env NODE_ENV=production node build/main.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: 'root',
      host: '47.104.141.41',
      ref: 'origin/master',
      repo: 'git@github.com:Guanyuhao/express-nuxt.git',
      path: '/home/autoNuxt',
      'post-deploy': 'npm install && pm2 reload NUXT --env production'
    },
    dev: {
      user: 'root',
      host: '47.104.141.41',
      ref: 'origin/dev',
      repo: 'git@github.com:Guanyuhao/express-nuxt.git',
      path: '/home/develop/nuxt',
      'post-deploy': 'npm install && pm2 reload NUXT --env dev',
      env: {
        NODE_ENV: 'dev'
      }
    }
  }
}
