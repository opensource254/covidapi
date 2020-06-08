/* eslint-disable array-callback-return */
const axios = require('axios');
const NewsModel = require('../models/newsModel');

// (async function saveTweets(req, res) {
//     const rawTweets = await axios.get('https://twitter.covid19kenya.site/api/v2/moh_kenya');
//     const allTweets = rawTweets.data;
//     try {
//         const tweets = NewsModel.create({ allTweets });
//         tweets
//             .save()
//             .then((news) => {
//                 return res.json({ status: 201, data: [news] });
//             })
//             .catch((err) => {
//                 res.status(400).json(err);
//                 console.log(err);
//             });
//     } catch (error) {
//         res.status(500).json(error);
//         console.log(error);
//     }
// })();
(function saveTweets() {
    axios
        .get('https://twitter.covid19kenya.site/api/v2/moh_kenya')
        .then((res) =>
            res.data.map((obj) => {
                const news = new NewsModel({
                    text: obj.text,
                    timestamp: new Date(obj.timestamp).toLocaleDateString('en-KE', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    }),
                    timestamp_relative: obj.timestamp_relative,
                    username: obj.username,
                    screen_name: obj.screen_name,
                    img_urls: obj.img_urls,
                });
                news.save();
            })
        )
        .catch((err) => console.log(err));
})();


// async getTweets(req, res) {
//     try {
//         await NewsModel.findAll()
//             .then((news) => {
//                 if (!news || news === ['']) {
//                     res.status(404).json('No news found');
//                 }
//                 res.status(200).json({
//                     news,
//                 });
//             })
//             .catch(function (err) {
//                 res.status(400).json({
//                     err,
//                 });
//             });
//     } catch (error) {
//         res.status(500).json(error);
//         console.log(error);
//     }
// },
