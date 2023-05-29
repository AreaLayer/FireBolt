// Create a plain text record in the in-memory DWN

const { record } = await web5.dwn.records.create({
    data: "Hello Web5",
    message: {
        dataFormat: 'text/plain',
    },
});
