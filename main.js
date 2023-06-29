const tweeter = Tweeter()
const renderer = Renderer()

function post() {
    const postInput = $("#input")

    const postText = postInput.val()
    tweeter.addPost(postText)

    postInput.val("")
    renderer.renderPosts(tweeter.getPosts())
}

$("#posts").on("click", ".delete", function () {
    const postId = $(this).closest(".post").data().id
    tweeter.removePost(postId)

    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on("click", ".delete-comment", function() {
    const commentId = $(this).closest("div").data().id
    const postId = $(this).closest(".post").data().id
    tweeter.removeComment(postId, commentId)

    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on("click", ".add-comment-button", function() {
    const postId = $(this).closest(".post").data().id
    const commentText = $(this).closest(".new-comment-input").find(".new-comment-input").val()

    tweeter.addComment(commentText,postId)

    renderer.renderPosts(tweeter.getPosts())
})


renderer.renderPosts(tweeter.getPosts())
