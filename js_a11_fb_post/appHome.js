var bgImages = document.querySelectorAll(".bg-images div");
var imgId = "";
count = 0;
var arr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
var text = "";

function changeBG() {
  bgImages[0].classList = "hidden";
  for (var i = 1; i < bgImages.length; i++) {
    // console.log(bgImages[i]);
    bgImages[i].classList.remove("hidden");
  }
  document.getElementById("close-btn").classList.remove("hidden");
}

function closeBG() {
  bgImages[0].className = "";
  for (let i = 1; i <= bgImages.classList; i++) {
    bgImages[i].classList.add("hidden");
  }
  document.getElementById("close-btn").classList.add("hidden");
  document.getElementById("textArea1").focus();
  document.getElementById("textArea1").style.backgroundImage = "";
  imgId = "";
}

function bgPut(id) {
  imgId = id;
  if (imgId) {
    text = `id="text"`;
  } else {
    text = "";
  }
  document.getElementById("textArea1").style.backgroundImage =
    "url(" + document.querySelector(`#${id} img`).src + ")";
  document.getElementById("textArea1").focus();
}

function postingInpValue() {
  var postDate = new Date();
  var time = postDate.toLocaleTimeString().split("");
  time.splice(4);
  var date =
    arr[postDate.getMonth()] +
    " " +
    postDate.getDate() +
    " at " +
    time.join("");
  var val = document.getElementById("textArea1").value;
  if (val !== "") {
    document.getElementById("textArea1").value = "";
    document.getElementById("main").innerHTML += `
    <div class="posted">
    <div class="title">
        <div class="name-sec">
            <img class="user-image" width="40px" height="40px" src="images/profile_pic.webp" alt="" srcset="">
            <div class="time">
                <p class="name">Shehzad Qadri
                <p id="time">${date}</p>
                </p>
            </div>
            <i onclick="deletePost()" id="option" class="fa-solid fa-trash"></i>
        </div>
    </div>
    <div class="bgPosition" ${text}>
        <p>
            ${val}
        </p>
    </div >
    <div class="like-comment-sec">
        <div onclick="thumbChange()" class="like">
            <i class="fa-regular fa-thumbs-up"></i>Like
        </div>
        <div class="comment">
            <i class="fa-solid fa-comment"></i>
            Comment
        </div>
    </div>
    <div id="comment-box">
        <img class="user-image" width="40px" height="40px" src="images/profile_pic.webp" alt="">
        <input type="text" placeholder="Write a comment..." id="comment-text" />
        <i onclick="onShare()" id="commented" class="fa-solid fa-share"></i>
    </div>
    <div id="comment">
    </div>
</div >
        `;
    if (imgId !== "") {
      document.getElementById(`text${count}`).style.backgroundImage =
        "url(" + document.querySelector(`#${imgId} img`).src + ")";
      count = count + 1;
    }
  } else {
    document.getElementById("error-message").innerHTML =
      "*Post cannot be submitted empty";
  }
  setTimeout(function () {
    document.getElementById("error-message").innerHTML = "";
  }, 2000);
  document.getElementById("textArea1").style.backgroundImage = "";
  closeBG();
  imgId = "";
  document.getElementById("textArea1").focus();
}


function putBgImageInInput(a) {
  imgId = a;
  if (imgId) {
    text = `id="text${count}"`;
  } else {
    text = "";
  }
  document.getElementById("textArea1").style.backgroundImage =
    "url(" + document.querySelector(`#${a} img`).src + ")";
  document.getElementById("textArea1").focus();
}



function deletePost() {
  event.target.parentNode.parentNode.parentNode.remove();
}

function thumbChange() {
  if (event.target.classList.contains("fa-thumbs-up")) {
    if (event.target.classList.contains("fa-regular")) {
      event.target.classList.remove("fa-regular");
      event.target.classList.add("fa-solid");
    } else if (event.target.classList.contains("fa-solid")) {
      event.target.classList.remove("fa-solid");
      event.target.classList.add("fa-regular");
    }
  } else if (event.target.children[0].classList.contains("fa-thumbs-up")) {
    if (event.target.children[0].classList.contains("fa-regular")) {
      event.target.children[0].classList.remove("fa-regular");
      event.target.children[0].classList.add("fa-solid");
    } else if (event.target.children[0].classList.contains("fa-solid")) {
      event.target.children[0].classList.remove("fa-solid");
      event.target.children[0].classList.add("fa-regular");
    }
  }
}

function onShare() {
  var commentVal = event.target.previousElementSibling.value;
  var gettingCommentList = event.target.parentNode.nextElementSibling;
  if (commentVal !== "") {
    event.target.previousElementSibling.value = "";
    gettingCommentList.innerHTML += `
        <div class="comment-list">
            <p>${commentVal}</p><i onclick="deleteComment()" id="bin" class="fa-solid fa-trash"></i>
        </div>
`;
  }
  event.target.previousElementSibling.focus();
}

function deleteComment() {
  event.target.parentNode.remove();
}
