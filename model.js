const Tweeter = function () {
    let _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    let postIdCounter = _posts.length
    let commentIdCounter = _posts.reduce((count, item) => count += item.comments.length)

    const getPosts = () => {
        return _posts
    }

    const _getPostNextId = function () {
        const lastPost = _posts[_posts.length - 1]
        const lastId = lastPost === undefined ? 1 : 1 + Number(lastPost.id.match(/(\d+)/)[0]);

        if (lastId) {
            return `p${lastId}`
        } else {
            return `p1`
        }
    }

    const _getCommentNextId = function () {
        let lastComment

        for (let i = _posts.length - 1; i >= 0; i--) {
            const lastPost = _posts[i]
            if (lastPost.comments.length > 0) {
                lastComment = lastPost.comments[lastPost.comments.length - 1]
                break
            }
        }

        const lastId = 1 + Number(lastComment.id.match(/(\d+)/)[0]);

        if (lastId) {
            return `c${lastId}`
        } else {
            return `c1`
        }
    }

    const addPost = function (text) {
        const newPost = {
            text: text,
            id: _getPostNextId(),
            comments: []
        }

        _posts.push(newPost)
    }

    const removePost = function (postId) {
        _posts = _posts.filter(value => value.id !== postId)
        console.log(_posts)
    }

    const addComment = function (text, postId) {
        const currentPost = _posts.find(value => value.id === postId)

        if (currentPost === undefined) {
            console.log(`Post ${postId} is not found`)
            return
        }

        currentPost.comments.push({
            id: _getCommentNextId(),
            text: text
        })

        console.log()
    }

    const removeComment = function (postId, commentId) {
        const currentPost = _posts.find(value => value.id === postId)

        if (currentPost === undefined) {
            console.log()
            return
        }

        currentPost.comments = currentPost.comments.filter(value => value.id !== commentId)
    }

    return {
        postCount: postIdCounter,
        commentCount: commentIdCounter,
        addPost,
        getPosts,
        removePost,
        addComment,
        removeComment
    }
}
