const {addTag, addDocument, getDocuments, getChat, createChat, updateChat, deleteChat, getChats, getAllMessages, createMessage} = require('./yokotai/api');


const test_url = "https://www.tilannehuone.fi/halytys.php";

async function makeNew(url, topic, language='finnish'){

    const newTag = await addTag("catbot-" + Date.now());
    console.log(newTag);

    const tagId = newTag.id;
    try {
        const newDoc = await addDocument(tagId, url);
        console.log(newDoc);
    } catch (e) {
        console.log("Error in addDoc: ", Object.keys(e));
    }
    //const documents = await getDocuments();
    //console.log(documents);
    const newChat = await createChat("CatBot"+Date.now(), [newTag.id]);
    //console.log(newChat);

    const chat = await getChat(newChat.id);
    //console.log(chat);

    const message = await createMessage(newChat.id, topic);
    //console.log(message);
    const messages = await getAllMessages(newChat.id);
    console.log(messages);

};

makeNew(test_url, "Listaa tämän päivän palohälytykset");