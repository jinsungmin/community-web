export type FindAllType = {
    search?: string
    sort?: string
    order?: string
    start: number
    perPage: number
    userId?: number
    postId?: number
    parentId?: number
};

export type CommentType = {
    id: number
    userId: number
    userName?: string
    parentId: number
    content: string
    createdAt: Date
    updatedAt: Date
}

export type CreateType = {
    userId: number
    postId?: number
    parentId?: number
    content: string
}

export type UpdateType = {
    content: string
}