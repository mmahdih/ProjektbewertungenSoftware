export interface Teacher {
    teacherId: number;
    name: string;
    surname: string;
    email?: string;
    classIds: number[];
    Subjects: number[];
    phoneNumber?: string;
}