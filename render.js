const Renderer = function () {
    function _renderNewCommentInput() {
        const newCommentInputContainer = $("<div class='new-comment-input'></div>") 

        const newCommentInput = $("<input type='text' placeholder='Got something to say ?'>")
        const newCommentButton = $("<button>Comment</button>")

        newCommentInputContainer.append(newCommentInput)
        newCommentInputContainer.append(newCommentButton)

        return newCommentInputContainer
    }

    function _renderPostComments(post) {
        const newPostCommentsContainer = $("<div class='comments'></div>")

        post.comments.forEach(comment => {
            const newComment = $(`<div data-id=${comment.id}>
            <span class='delete-comment'>x</span>${comment.text}
            </div>`)

            newPostCommentsContainer.append(newComment)
        })

        const newCommentInputContainer = _renderNewCommentInput()
        newPostCommentsContainer.append(newCommentInputContainer)

        return newPostCommentsContainer
    }

    function renderPosts(posts) {
        const postContainer = $("#posts")

        posts.forEach(post => {
            const newPost = $(`<div class='post' data-id=${post.id}></div>`)

            const newPostText = $(`<p class='post-text'>${post.text}</p>`)
            newPost.append(newPostText)

            const newPostCommentsContainer = _renderPostComments(post)
            newPost.append(newPostCommentsContainer)

            const deletePostButton = $("<button class='delete'>Delete Post</button>")
            newPost.append(deletePostButton)

            postContainer.append(newPost)
        });
    }

    return {
        renderPosts
    }
}