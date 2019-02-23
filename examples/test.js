'use strict';

var chatList = document.getElementById('chat-list');
var chatForm = document.getElementById('chat-form');
var allComments = [];

var Comment = function(username, text) {
  this.username = username;
  this.text = text;
};

Comment.prototype.render = function() {
  var liEl = document.createElement('li');
  // liEl.innerHtml = '<b>' + this.username + ': </b><em>' + this.text + '</em>';
  liEl.innerHTML = ' <b>' + this.username + ': </b><em>' + this.text + '</em>';
  return liEl;

};

function handleCommentSubmit(event) {
  event.preventDefault();
  var commenter = event.target.who.value;
  var remark = event.target.says.value;

  var newComment = new Comment(commenter, remark);

  event.target.who.value = null;
  event.target.says.value = null;
  
  allComments.unshift(newComment);
  renderAllComments();
}

function renderAllComments() {
  chatList.innerHTML = '';
  for(var i = 0; i < allComments.length; i++) {
    chatList.appendChild(allComments[i].render());
  }
}

chatForm.addEventListener('submit', handleCommentSubmit);