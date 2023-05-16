import 'dotenv/config';


module.exports = {
  name: 'jobapp',
  version: '1.0.0',
  "scheme": "jobapp",
  extra: {
    rapidApiKey: process.env.RAPID_API_KEY,
  },
};