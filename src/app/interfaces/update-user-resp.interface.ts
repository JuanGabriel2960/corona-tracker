export interface UpdateUserResp {
    msg:         string;
    updatedUser: UpdatedUser;
}

export interface UpdatedUser {
    _id:   string;
    email: string;
    role:  string;
}