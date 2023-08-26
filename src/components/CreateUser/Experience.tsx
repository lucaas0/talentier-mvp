import React, { useMemo, useState } from 'react';
import CreateFormHeader from '../shared/CreateFormHeader';
import CustomInput from '../shared/Input';
import CustomLabel from '../shared/Label';
import { NextButton } from '../shared/NextButton';
import { CreateFormSteps } from '@/utils/constants';
import { UserExperience } from '@/utils/utils';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

interface CreateUserExperienceProps {
    userName: string;
    onExperienceChange: (experience: UserExperience) => void;
    onStepChange: (nextStep: CreateFormSteps) => void;
    experience?: UserExperience;
}

const CreateUserStepExperience = ({
    onExperienceChange,
    onStepChange,
    userName,
    experience,
}: CreateUserExperienceProps) => {
    const onStepBack = () => {
        onStepChange(CreateFormSteps.Birthday);
    };

    const [userExperience, setUserExperience] = useState<UserExperience>(
        experience || {
            title: '',
            companyName: '',
            industry: '',
            employmentType: '',
            location: '',
            startDate: new Date(),
            endDate: new Date(),
            id: '',
        }
    );

    const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const { value, name } = e.currentTarget;

        setUserExperience({
            ...userExperience,
            [name]: value,
        });
    };

    const onDateChange = (field: string, value: Date) => {
        setUserExperience({
            ...userExperience,
            [field]: value,
        });
    };

    const isNextDisabled = () => {
        return (
            !userExperience.title ||
            !userExperience.companyName ||
            !userExperience.industry ||
            !userExperience.employmentType ||
            !userExperience.location ||
            !userExperience.startDate ||
            !userExperience.endDate
        );
    };

    const onNextClick = () => {
        onExperienceChange(
            experience
                ? userExperience
                : {
                      ...userExperience,
                      id: crypto.randomUUID(),
                  }
        );
        onStepChange(CreateFormSteps.ViewExperiences);
    };

    console.log(userExperience);

    return (
        <section className='scrollable-container'>
            <CreateFormHeader onStepBack={onStepBack} />
            <section className='flex flex-col w-full my-8'>
                <h1 className='color-222 text-xl font-extrabold mr-8'>
                    Alright {userName.split(' ')[0]}, {`let's setup`}
                </h1>
                <h2 className='color-667085 text-sm font-medium'>
                    {`Don't worry you can always edit this later`}
                </h2>
            </section>
            <section className='flex flex-col gap-2 w-full my-2'>
                <CustomLabel text='Title' />
                <CustomInput
                    type='text'
                    placeholder='Your last job title'
                    hasError={
                        userExperience.title.length === 0
                            ? false
                            : userExperience.title.length < 5
                    }
                    value={userExperience.title}
                    onInputChange={onFieldChange}
                    name='title'
                />
            </section>
            <section className='flex flex-col gap-2 w-full my-2'>
                <CustomLabel text='Company Name' />
                <CustomInput
                    type='text'
                    placeholder='Company name'
                    hasError={
                        userExperience.companyName.length === 0
                            ? false
                            : userExperience.companyName.length < 3
                    }
                    value={userExperience.companyName}
                    onInputChange={onFieldChange}
                    name='companyName'
                />
            </section>
            <section className='flex flex-col gap-2 w-full my-2'>
                <CustomLabel text='Industry' />
                <CustomInput
                    type='text'
                    placeholder='Industry'
                    hasError={
                        userExperience.industry.length === 0
                            ? false
                            : userExperience.industry.length < 3
                    }
                    value={userExperience.industry}
                    onInputChange={onFieldChange}
                    name='industry'
                />
            </section>
            <section className='flex flex-col gap-2 w-full my-2'>
                <CustomLabel text='Employment Type' />
                <CustomInput
                    type='text'
                    placeholder='Full-Time, Part-Time, etc..'
                    hasError={
                        userExperience.employmentType.length === 0
                            ? false
                            : userExperience.employmentType.length < 3
                    }
                    value={userExperience.employmentType}
                    onInputChange={onFieldChange}
                    name='employmentType'
                />
            </section>
            <section className='flex flex-col gap-2 w-full my-2'>
                <CustomLabel text='Location' />
                <CustomInput
                    type='text'
                    placeholder='Paris, Lisbon, Remote...'
                    hasError={
                        userExperience.location.length === 0
                            ? false
                            : userExperience.location.length < 3
                    }
                    value={userExperience.location}
                    onInputChange={onFieldChange}
                    name='location'
                />
            </section>
            <section className='flex flex-col gap-2 w-full my-2'>
                <CustomLabel text='Start Date' />
                <DatePicker
                    selected={userExperience.startDate}
                    onChange={(date: Date) => onDateChange('startDate', date)}
                    className='color-667085 text-sm w-full bg-F2F4F7 rounded-lg p-3 outline-none'
                    dateFormat='dd/MM/yyyy'
                    placeholderText='dd/mm/yyyy'
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode='select'
                />
            </section>
            <section className='flex flex-col gap-2 w-full my-2'>
                <CustomLabel text='End Date' />
                <DatePicker
                    selected={userExperience.endDate}
                    onChange={(date: Date) => onDateChange('endDate', date)}
                    className='color-667085 text-sm w-full bg-F2F4F7 rounded-lg p-3 outline-none'
                    dateFormat='dd/MM/yyyy'
                    placeholderText='dd/mm/yyyy'
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode='select'
                />
            </section>
            <NextButton
                disabled={isNextDisabled()}
                text='Next'
                callback={onNextClick}
            />
        </section>
    );
};

export default CreateUserStepExperience;
