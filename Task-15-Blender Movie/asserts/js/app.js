var videos = document.querySelector(".video-source");
var source = document.createElement("source");
source.setAttribute("src", video.videoUrl);
source.setAttribute("type", "video/mp4");
videos.append(source);
var title = document.getElementsByTagName("h2")[0];
title.innerText = video.title;
var desc = document.querySelector(".desc");
desc.innerText = video.description;
let comments_section=document.querySelector(".comments");
for (i in video.comments) {
    console.log("Comments");
    var comm = document.createElement("div");
    comm.setAttribute("class", "comment");
    var dp = document.createElement("div");
    dp.setAttribute("class", "comments-dp");
    var content = document.createElement("div");
    content.setAttribute("class", "comments-content");
    var dp_img = document.createElement("img");
    dp_img.setAttribute("src", video.comments[i].image);
    dp.append(dp_img);
    var com_name = document.createElement("h6");
    com_name.innerText = video.comments[i].name;
    var com = document.createElement("p");
    com.innerText = video.comments[i].comment;
    com_name.append(com);
    content.append(com_name);
    comm.append(dp);
    comm.append(content);
    comments_section.append(comm);
}
var poster = document.querySelector(".images-right");
for (temp in posters) {
    var image=document.createElement("div");
    image.setAttribute("class","images");
    var img = document.createElement("img");
    img.setAttribute("src", posters[temp].imageUrl);
    img.setAttribute("alt", posters[temp].title);
    image.append(img);
    poster.append(image);
}
