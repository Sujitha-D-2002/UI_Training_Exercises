function execute() {
    for (temp in jsonFriendList) {
        let container = document.querySelector(".flex-container");
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let content = document.createElement("div");
        content.setAttribute("class", "content");
        let image_div = document.createElement("div");
        let image = document.createElement("img");
        image_div.setAttribute("class","image");
        image.setAttribute("src", jsonFriendList[temp].img);
        image_div.append(image);
        let user_name = "<h3>"
        user_name += jsonFriendList[temp].first_name + " " + jsonFriendList[temp].last_name;
        user_name += "</h3>"
        user_name += "<p>"
        user_name += jsonFriendList[temp].email;
        user_name += "</p>"
        content.innerHTML = user_name;
        card.append(image_div);
        card.append(content);
        container.append(card);
    }
}