


 const timeCount = (createdDate) => {
    let currentDate = Date.now() / 1000

    let time = currentDate - createdDate


    if (time < 3600) {
        time = Math.ceil(time / 60);
        return `${time} min${time>1?'s':''}`;
    } else if (time < 86400) {
        time = Math.ceil(time / 3600);
        return `${time} hr${time>1?'s':''}`;
    } else if (time < 31536000) {
        time = Math.ceil(time / 86400);
        return `${time} day${time>1?'s':''}`;
    } else if (time >= 31536000) {
        time = Math.ceil(time / 31536000);
        return `${time} year${time>1?'s':''}`
    }else{
        return "Out of ranged"
    }

}

const sanitizeRedditUrl =(url)=> {
  if (typeof url !== "string") {
    return null;
  }
  return url.replace(/&amp;/g, "&").trim();
}


export {timeCount, sanitizeRedditUrl}; 