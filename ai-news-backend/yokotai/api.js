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

const createChat = async (name, tags) => {
  const accessToken = await getAccessToken();
  const response = await axios.post(`${process.env.API_URL}/chats`, {
    "tags": tags,
    "name": name,
    "use_internal_data": true
  }, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}

const getChat= async (id) => {
  const accessToken = await getAccessToken();
  const response = await axios.get(`${process.env.API_URL}/chats/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}

const updateChat= async (id, name, tags) => {
  const accessToken = await getAccessToken();
  const response = await axios.put(`${process.env.API_URL}/chats/${id}`,{
    "tags": tags,
    "name": name,
    "use_internal_data": true
  },{
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}

const deleteChat = async (id) => {
  const accessToken = await getAccessToken();
  const response = await axios.delete(`${process.env.API_URL}/chats/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}

const getChats = async () => {
  const accessToken = await getAccessToken();
  const response = await axios.get(`${process.env.API_URL}/chats`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}

const createMessage = async (chatId, content) => {
  const accessToken = await getAccessToken();
  const response = await axios.post(`${process.env.API_URL}/messages`, {
    "content": content,
    "chat_id": chatId,
    "instructions": "string",
  }, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}

const getAllMessages = async (chatId) =>{
  const accessToken = await getAccessToken();
  const response = await axios.get(`${process.env.API_URL}/messages`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      chat_id: chatId,
    },
  });
  return response.data;
}


module.exports = {
    getDocuments,
    getChat,
    createChat,
    updateChat,
    deleteChat,
    getChats, 
    createMessage,
    getAllMessages,
};  

