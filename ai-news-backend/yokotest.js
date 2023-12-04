const { getDocuments } = require('./yokotai/api');

(async () => {
    const documents = await getDocuments();
    console.log(documents);
})();

