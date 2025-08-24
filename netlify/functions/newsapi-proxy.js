const axios = require('axios');

exports.handler = async (event) => {
  const query = event.queryStringParameters.q || 'real estate Bengaluru India';
  const apiKey = 'b2e5424f62294ae49339359f6c76a7a7'; // Insert your NewsAPI key here
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=en&sortBy=publishedAt&apiKey=${apiKey}&pageSize=4`;

  try {
    const response = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
