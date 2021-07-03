import profileReducer, {addPostAC, deletePostAC} from "./profileReducer";

let state = {

    posts: [
        {id:1,message:'Hi how are you',likeCount:15},
        {id:2,message:'I am fine',likeCount:35},
        {id:3,message:'How old are you',likeCount:25},
        {id:4,message:'Thank you',likeCount:5},
    ],
}

it('length of post should be incremented', () => {
    let action = addPostAC("React app")

    let newState = profileReducer(state,action)

    expect(newState.posts.length).toBe(5);
})

it('Message of new post should be correct', () => {
    let action = addPostAC("React app")


    let newState = profileReducer(state,action)

    expect(newState.posts[4].message).toBe("React app");
})


it('after deleting length of messages should be decrement', () => {

    let action = deletePostAC(1)


    let newState = profileReducer(state,action)

    expect(newState.posts.length).toBe(3);
})


it("after deleting length  shouldn't be decrement if id is incorrect", () => {

    let action = deletePostAC(13)


    let newState = profileReducer(state,action)

    expect(newState.posts.length).toBe(4);
})




