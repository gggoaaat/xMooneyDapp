// next.config.js
module.exports = {
  reactStrictMode: true,
  analyticsId: '7vsHWbYwcKpA3lFTng2Qe9iNzE7',
  env: {
    contractAddress: "0x98631c69602083d04f83934576a53e2a133d482f",
    infuraID: "b830c8484bf841d795848610ff791d5b",
    defaultGas: 210000,
    debug: false,
    NEXT_PUBLIC_SERVER_URL: 'https://61xxdlusmokj.usemoralis.com:2053/server',
    NEXT_PUBLIC_APP_ID: 'FQ5GoOcQK7LvYmmP0faqvWaTiD0kDQLqSkGpJNWf'
  },
  images: {
    domains: ['static.wixstatic.com'],
  },
  async headers() {
    return [
      {
        // matching all API routes
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
}


