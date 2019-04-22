let time = new Date();

let timeStr = time.toLocaleDateString();

let comments = {
  date: " ",
  name: " ",
  contents: " "
};

let commentsArray = [
  {
    date: "03/20/2019",
    name: "Rosa Kang",
    contents:
      "They blew the roof off at their last show, once everyone started figuring out they were going."
  },
  {
    date: "01/29/2019",
    name: "Chris Lee",
    contents:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board."
  },
  {
    date: "11/11/2019",
    name: "Caroline B",
    contents:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day."
  }
];

function writeComment() {
  for (i = 0; i < commentsArray.length; i++) {
    logComment(commentsArray[i]);
  }
}

function logComment(comments) {
  let div = document.createElement("div");
  div.innerHTML =
    '<div class="existingBox">' +
    '<div id="avatar">' +
    '<img src="Images-2/e1e1e1.png"/>' +
    "</div>" +
    '<div id="letters">' +
    '<div id="nameDate">' +
    '<div id="name">' +
    comments.name +
    "</div>" +
    '<div id="date">' +
    comments.date +
    "</div>" +
    "</div>" +
    '<div id="text">' +
    comments.contents +
    "</div>" +
    "</div>" +
    "</div>";
  document.getElementById("existingComment").appendChild(div);
}

function getInfo() {
  comments.name = document.getElementById("inputName").value;
  comments.contents = document.getElementById("inputComment").value;
  comments.date = timeStr;

  let div = document.createElement("div");
  div.innerHTML =
    '<div class="existingBox">' +
    '<div id="avatar">' +
    '<img src="Images-2/e1e1e1.png"/>' +
    "</div>" +
    '<div id="letters">' +
    '<div id="nameDate">' +
    '<div id="name">' +
    comments.name +
    "</div>" +
    '<div id="date">' +
    comments.date +
    "</div>" +
    "</div>" +
    '<div id="text">' +
    comments.contents +
    "</div>" +
    "</div>" +
    "</div>";
  document.getElementById("addComment").appendChild(div);
  document.getElementById("inputName").value = "";
  document.getElementById("inputComment").value = "";
}

window.onload = writeComment;
