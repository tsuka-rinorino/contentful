const contentful = require('contentful');

export default contentful.createClient({
  space: process.env.VUE_APP_CTF_SPACE_ID,
  accessToken: process.env.VUE_APP_CTF_CD_ACCESS_TOKEN,
});
