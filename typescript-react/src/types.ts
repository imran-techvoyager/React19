export type Info = {
    id: number;
    name: string;
    email: string;
};

export interface AdminInfoList extends Info {
     role: string; 
     lastLogin: Date;
}