import { FormEvent, ReactNode } from "react";

export interface IContact {
    createAt: Date,
    _id: string,
    name: string,
    nickname: string,
    email: string,
    __v: number
}

export interface INewContact {
    name: string,
    nickname: string,
    email: string,
}

export type TFormEvent = FormEvent<HTMLInputElement>

export type ChildrenProp = {
    children: ReactNode
}