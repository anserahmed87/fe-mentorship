// `by`?The username of the item's author.
// `descendants`?In the case of stories or polls, the total comment count.
// `id`?The item's unique id.
// `score`?The story's score, or the votes for a pollopt.
// `time`?Creation date of the item, in Unix Time (seconds).
// `title`?The title of the story, poll or job.
// `type`?The type of item. One of "job", "story", "comment", "poll", or "pollopt".
// `url`?The URL of the story.

const itemsIds = [16983195, 16978342, 16980292, 16982986, 16982396, 16978932, 16978901, 16981439, 16975853, 16978544]

const itemsPerId = {
    "16983195": {
        "by": "snaky",
        "descendants": 159,
        "id": 16983195,
        "score": 234,
        "time": 1525318921,
        "title": "Is there a fix for impostor syndrome?",
        "type": "story",
        "url": "http://interactions.acm.org/archive/view/may-june-2018/is-there-a-fix-for-impostor-syndrome"
    },
    "16978342": {
        "by": "Apocryphon",
        "descendants": 108,
        "id": 16978342,
        "score": 159,
        "time": 1525277178,
        "title": "Over 30? Too Old for Tech Jobs in China",
        "type": "story",
        "url": "https://www.bloomberg.com/news/features/2018-05-02/china-s-tech-industry-wants-youth-not-experience"
    },
    "16980292": {
        "by": "antoinefink",
        "descendants": 246,
        "id": 16980292,
        "score": 736,
        "time": 1525288857,
        "title": "AT&T updates firmware to block access to 1.1.1.1",
        "type": "story",
        "url": "https://www.dslreports.com/forum/r31901625-New-BGW-210-700-Firmware-1-5-11"
    },
    "16982986": {
        "by": "qiuyesuifeng",
        "descendants": 63,
        "id": 16982986,
        "score": 160,
        "time": 1525315440,
        "title": "GitHub's online schema migration for MySQL",
        "type": "story",
        "url": "https://github.com/github/gh-ost"
    },
    "16982396": {
        "by": "duncanmeech",
        "descendants": 43,
        "id": 16982396,
        "score": 216,
        "time": 1525307934,
        "title": "The life cycle of HIV in 3D [video]",
        "type": "story",
        "url": "https://blogs.scientificamerican.com/observations/watch-the-life-cycle-of-hiv-in-colorful-new-detail/"
    },
    "16978932": {
        "by": "vanni",
        "descendants": 327,
        "id": 16978932,
        "score": 585,
        "time": 1525280441,
        "title": "Python startup time: milliseconds matter",
        "type": "story",
        "url": "https://mail.python.org/pipermail/python-dev/2018-May/153296.html"
    },
    "16978901": {
        "by": "zengid",
        "descendants": 248,
        "id": 16978901,
        "score": 517,
        "time": 1525280236,
        "title": "Proton Native ? React Native for the desktop",
        "type": "story",
        "url": "https://proton-native.js.org/"
    },
    "16981439": {
        "by": "hapnin",
        "descendants": 133,
        "id": 16981439,
        "score": 214,
        "time": 1525297588,
        "title": "Goldman Sachs to Open a Bitcoin Trading Operation",
        "type": "story",
        "url": "https://nytimes.com/2018/05/02/technology/bitcoin-goldman-sachs.html"
    },
    "16975853": {
        "by": "dankohn1",
        "descendants": 0,
        "id": 16975853,
        "score": 62,
        "time": 1525260181,
        "title": "Humpback Whale Baby Boom Near Antarctica",
        "type": "story",
        "url": "https://www.nytimes.com/2018/05/01/science/humpback-whale-antarctica.html"
    },
    "16978544": {
        "by": "standeven",
        "descendants": 198,
        "id": 16978544,
        "score": 364,
        "time": 1525278211,
        "title": "'Anti-authority' tech rebels take on ISPs, connect NYC with cheap Wi-Fi",
        "type": "story",
        "url": "http://www.cbc.ca/news/technology/wifi-nyc-mesh-new-york-city-1.4617106"
    }
};

export const api = {
    getItemsIds: () => itemsIds,
    getItem: (id) => itemsPerId[id],
}