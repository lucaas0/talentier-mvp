export interface UserExperience {
    title: string;
    companyName: string;
    industry: string;
    employmentType: string;
    location: string;
    startDate: Date;
    endDate: Date;
}

export interface User {
    email: string;
    password: string;
    name: string;
    birthday: Date;
    experiences: UserExperience[];
}
