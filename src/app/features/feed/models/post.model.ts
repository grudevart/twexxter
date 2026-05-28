import { User } from "../../profile/models/user.model";

export interface Post {
    id: number;
    title: string;
    content: string;
    userId: number;
    imageUrl: string;
    likes: number;
    
    user: User
}
