const axios = require('axios');
const { getAccessToken } = require('./authentication');

const getDocuments = async () => {
  const accessToken = await getAccessToken();
  const response = await axios.get(`${process.env.API_URL}/documents`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}

module.exports = {
    getDocuments,
};  
