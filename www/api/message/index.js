module.exports = async function (context, req) {
    context.res.json({
        text: `Hello World!/n
        This is a multiline text message./n
        It is sent from an Azure Functions API!`
    });
};
