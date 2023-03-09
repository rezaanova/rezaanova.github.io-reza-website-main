const APIKey = '';
const Userid = '';
const element = document.querySelector('.yt_views');

let getdata = async () => {
  await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Userid}&key=${APIKey}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data['items'][0]);
      element.innerHTML = `${data['items'][0].statistics.subscriberCount} Subscribers`;
    });
};
getdata();
