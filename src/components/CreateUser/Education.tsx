import React, { useMemo, useState } from 'react';
import CreateFormHeader from '../shared/CreateFormHeader';
import CustomInput from '../shared/Input';
import CustomLabel from '../shared/Label';
import { NextButton } from '../shared/NextButton';
import { CreateFormSteps } from '@/utils/constants';
import { UserEducation } from '@/utils/utils';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

interface CreateUserEducationProps {
    onEducationChange: (education: UserEducation) => void;
    onStepChange: (nextStep: CreateFormSteps) => void;
    education?: UserEducation;
}

const CreateUserStepEducation = ({
    onEducationChange,
    onStepChange,
    education,
}: CreateUserEducationProps) => {
    const onStepBack = () => {
        onStepChange(CreateFormSteps.ViewExperiences);
    };

    const [userEducation, setUserEducation] = useState<UserEducation>(
        education || {
            level: '',
            area: '',
            organization: '',
            description: '',
            startDate: new Date(),
            endDate: new Date(),
            id: '',
        }
    );

    const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const { value, name } = e.currentTarget;

        setUserEducation({
            ...userEducation,
            [name]: value,
        });
    };

    const onDateChange = (field: string, value: Date) => {
        setUserEducation({
            ...userEducation,
            [field]: value,
        });
    };

    const isNextDisabled = () => {
        return (
            !userEducation.level ||
            !userEducation.area ||
            !userEducation.organization ||
            !userEducation.description ||
            !userEducation.startDate ||
            !userEducation.endDate
        );
    };

    const onNextClick = () => {
        onEducationChange(
            education
                ? userEducation
                : {
                      ...userEducation,
                      id: crypto.randomUUID(),
                  }
        );
        onStepChange(CreateFormSteps.ViewEducations);
    };

    return (
        <section className='scrollable-container'>
            <CreateFormHeader onStepBack={onStepBack} />
            <section className='flex flex-col w-full my-8'>
                <h1 className='color-222 text-xl font-extrabold mr-8'>
                    Education
                </h1>
                <h2 className='color-667085 text-sm font-medium'>
                    {`Don't worry you can always edit this later`}
                </h2>
            </section>
            <section className='flex flex-col gap-2 w-full my-2'>
                <CustomLabel text='Level' />
                <CustomInput
                    type='text'
                    placeholder='Bachelors degree, Masters degree, Doctorate/PhD...'
                    hasError={
                        userEducation.level.length === 0
                            ? false
                            : userEducation.level.length < 5
                    }
                    value={userEducation.level}
                    onInputChange={onFieldChange}
                    name='level'
                />
            </section>
            <section className='flex flex-col gap-2 w-full my-2'>
                <CustomLabel text='Area' />
                <CustomInput
                    type='text'
                    placeholder='Design, Engineering...'
                    hasError={
                        userEducation.area.length === 0
                            ? false
                            : userEducation.area.length < 3
                    }
                    value={userEducation.area}
                    onInputChange={onFieldChange}
                    name='area'
                />
            </section>
            <section className='flex flex-col gap-2 w-full my-2'>
                <CustomLabel text='Organization' />
                <CustomInput
                    type='text'
                    placeholder='Name of the organization'
                    hasError={
                        userEducation.organization.length === 0
                            ? false
                            : userEducation.organization.length < 3
                    }
                    value={userEducation.organization}
                    onInputChange={onFieldChange}
                    name='organization'
                />
            </section>
            <section className='flex flex-col gap-2 w-full my-2'>
                <CustomLabel text='Start Date' />
                <DatePicker
                    selected={userEducation.startDate}
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
                    selected={userEducation.endDate}
                    onChange={(date: Date) => onDateChange('endDate', date)}
                    className='color-667085 text-sm w-full bg-F2F4F7 rounded-lg p-3 outline-none'
                    dateFormat='dd/MM/yyyy'
                    placeholderText='dd/mm/yyyy'
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode='select'
                />
            </section>
            <section className='flex flex-col gap-2 w-full my-2'>
                <CustomLabel text='Description' />
                <CustomInput
                    type='text'
                    placeholder='Main subjects,, etc...'
                    hasError={
                        userEducation.description.length === 0
                            ? false
                            : userEducation.description.length < 3
                    }
                    value={userEducation.description}
                    onInputChange={onFieldChange}
                    name='description'
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

export default CreateUserStepEducation;
