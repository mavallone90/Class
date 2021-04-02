const root = document.querySelector(".site-wrap");
const nytapi = "qa1UnMV3WkBkjX7RL1f8lJYTd9J86fPT";
const nytUrl = `https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=${nytapi}`;

const just_url = document.querySelector(".API_URL")
just_url.innerHTML = `<a href="${nytUrl}">LINK</a>`