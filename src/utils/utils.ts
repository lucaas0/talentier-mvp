export interface UserExperience {
    title: string;
    companyName: string;
    industry: string;
    employmentType: string;
    location: string;
    startDate: Date;
    endDate: Date;
    uuid: string;
}

export interface UserEducation {
    level: string;
    area: string;
    organization: string;
    startDate: Date;
    endDate: Date;
    description: string;
    uuid: string;
}

export interface JobPreferences {
    [key: string]: string[];
    location: string[];
    employmentType: string[];
    role: string[];
}

export interface User {
    email: string;
    password: string;
    name: string;
    birthday: Date;
    experiences: UserExperience[];
    educations: UserEducation[];
    skills: string[];
    jobPreferences: JobPreferences;
    photoUrl: string;
}
