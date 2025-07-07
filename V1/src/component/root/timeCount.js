
 const timeCount = (created) => {
    let currentDate = Date.now() / 1000

    let time = currentDate - created


    if (time < 3600) {
        time = Math.ceil(time / 60);
        return `${time} min`;
    } else if (time < 86400) {
        time = Math.ceil(time / 3600);
        return `${time} hr`;
    } else if (time < 31536000) {
        time = Math.ceil(time / 86400);
        return `${time} day`;
    } else if (time >= 31536000) {
        time = Math.ceil(time / 31536000);
        return `${time} year`
    }else{
        return "Out of ranged"
    }

}

export {timeCount}; 