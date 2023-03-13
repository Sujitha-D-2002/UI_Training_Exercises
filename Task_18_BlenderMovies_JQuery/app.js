$(document).ready(async function () {
  await $.ajax({
    url: 'https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      const result = JSON.stringify(data);
      const jsonObject = JSON.parse(result);
      var source = (`
        <source src=${jsonObject.videoUrl} type= "video/mp4"/>
    `);;
    $('.video-source').append(source);
    $('.title').text(jsonObject.title)
    $('.desc').text(jsonObject.description);
    for (temp of jsonObject.comments) {
      let comment = (`
      <div class="comment">
        <div class="comments-dp">
        <img src=${temp['image']} alt="dp"}/>
        </div>
        <div class="comments-content">
          <h6>${temp['name']}</h6>
          <p>${temp['comment']}</p>
        </div>
      </div>
    `);
      $('.comments').append(comment);
    }


    }
  });
  await $.ajax({
    url: 'https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      const result = JSON.stringify(data);
      const jsonObject = JSON.parse(result);
      for (temp of jsonObject) {
        let image = (`
        <div class="images">
          <img src=${temp['imageUrl']} alt=${temp['title']}/>
        </div>
      `);
        $('.images-right').append(image);
      }

    }
  });
});
