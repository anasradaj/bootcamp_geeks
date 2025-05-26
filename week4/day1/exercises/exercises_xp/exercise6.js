// 1. Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
(function (children, partnerName, location, jobTitle) {
    console.log(`You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${children} kids.`);
})(8, "Aicha", "ben guerir", "Software Engineer");