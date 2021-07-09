export type FindAllType = {
    userId?: number
    postId?: number
    commentId?: number
    type?: number
};

export type FindOneType = {
    id?: number
    userId?: number
    postId?: number
    commentId?: number
    type?: number
};

export type RatingType = {
    id: number
    userId: number
    postId: number
    commentId: number
    type: number
}

export type CreateType = {
    userId: number
    postId?: number
    commentId?: number
    type: number
}