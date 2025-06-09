// backend/server.js
const express = require('express');
const AWS = require('aws-sdk');
const app = express();
const port = process.env.PORT || 5000;

// Configure AWS SDK to use IAM role of EC2 (no explicit keys)
AWS.config.update({ region: process.env.AWS_REGION });
const ddb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.DYNAMO_TABLE_NAME || 'EZDeals-Products';

app.get('/api/products', async (req, res) => {
    try {
        const data = await ddb.scan({ TableName: TABLE_NAME }).promise();
        res.json(data.Items);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
});
