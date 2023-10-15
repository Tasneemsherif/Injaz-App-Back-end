export interface IUser {
    name: string;
    email: string;
    password: string;
}

export interface IColor {
    name: string;
    code: string;
    id: string;
}

export interface IIcon {
    name: string;
    symbol: string;
    id: string;
}

export interface ICategory {
name: string;
_id: string;
isEditable: boolean;
color: IColor;
user : IUser | string;
icon: IIcon;

}
 
export interface ITask {
  _id: string
  name: string
  categoryId: string
  user: string
  isCompleted: boolean
  isEditable: boolean
  date: string
  createdAt: string
  updatedAt: string
}