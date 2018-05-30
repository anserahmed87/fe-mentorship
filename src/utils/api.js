// `by`?The username of the item's author.
// `descendants`?In the case of stories or polls, the total comment count.
// `id`?The item's unique id.
// `score`?The story's score, or the votes for a pollopt.
// `time`?Creation date of the item, in Unix Time (seconds).
// `title`?The title of the story, poll or job.
// `type`?The type of item. One of "job", "story", "comment", "poll", or "pollopt".
// `url`?The URL of the story.


const BASE_URL = 'https://hacker-news.firebaseio.com';
const fetchJson = url => fetch(url).then(res => res.json());

export const api = {
    getItem: id => fetchJson(`${BASE_URL}/v0/item/${id}.json`),
    getItemsIds: () => fetchJson(`${BASE_URL}/v0/topstories.json`),
};