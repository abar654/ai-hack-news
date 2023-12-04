const axios = require('axios');
const { getAccessToken } = require('./authentication');
const FormData = require('form-data');

const getDocuments = async () => {
    const accessToken = await getAccessToken();
    const response = await axios.get(`${process.env.API_URL}documents`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data;
}

const addTag = async (tag) => {
    const accessToken = await getAccessToken();
    const response = await axios.post(`${process.env.API_URL}tags`,
        { "name": tag },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );
    return response.data;
}

const getTags = async () => {
    const accessToken = await getAccessToken();
    const response = await axios.get(`${process.env.API_URL}tags`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data;
}

const addDocument = async (tagId, url, depth = 0) => {
    const accessToken = await getAccessToken();

    const formData = new FormData();

    const data = {
        "tags": [tagId],
        "url": url,
        "maxdepth": depth,
        "maxexternaldepth": 0,
        "rooturl": ""
    };

    formData.append('data', JSON.stringify(data));

    const response = await axios.post(`${process.env.API_URL}documents`,
        formData,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    return response.data;

}

module.exports = {
    getDocuments,
    addDocument,
    getTags,
    addTag
};  
