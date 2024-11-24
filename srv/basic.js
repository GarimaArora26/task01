const cds = require('@sap/cds');

module.exports = (srv) => {

    srv.on('ping', () => {
        console.log("**********")
        // return {
        //     "@odata.context": "$metadata#Edm.String",
        //     "value": "pong"
        // };
    });
}