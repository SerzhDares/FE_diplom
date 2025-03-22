export const dateFormatter = (date: any) => {
    const formattedDate = new Date(date).toLocaleDateString();
    const totalDate = formattedDate.slice(-4) + '-' + formattedDate.slice(3, 5) + '-' + formattedDate.slice(0, 2);
    return totalDate;
}

export const trainsTimeFormatter = (time: any) => {
    const travelTime = new Date(time*1000).toLocaleTimeString();
    const formattedTravelTime = travelTime.slice(0, 5);
    return formattedTravelTime;
}

export const travelDurationFormatter = (time: any) => {
    const durationTime = time/3600;
    const hours = Math.floor(durationTime);
    const minutes = Math.round((durationTime - Math.floor(durationTime))*60);
    const f_minutes = Number(minutes) < 10 ? '0' + minutes : minutes
    const formattedDurationTime = hours + ':' + f_minutes;
    return formattedDurationTime;
}