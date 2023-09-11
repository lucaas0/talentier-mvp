import React from 'react';
import CreateFormHeader from '../shared/CreateFormHeader';
import CustomLabel from '../shared/Label';
import { CustomButton } from '../shared/NextButton';
import { CreateFormSteps } from '@/utils/constants';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
interface CreateUserBirthdayProps {
    birthday: Date;
    onBirthdayChange: (birthdate: Date) => void;
    onStepChange: (nextStep: CreateFormSteps) => void;
}

const CreateUserStepBirthday = ({
    birthday,
    onBirthdayChange,
    onStepChange,
}: CreateUserBirthdayProps) => {
    const onStepBack = () => {
        onStepChange(CreateFormSteps.Name);
    };

    return (
        <React.Fragment>
            <CreateFormHeader onStepBack={onStepBack} />
            <section className='flex flex-col w-full my-8'>
                <h1 className='color-222 text-xl font-extrabold mr-8'>
                    Add your birthday
                </h1>
                <h2 className='color-667085 text-sm font-medium'>
                    We need to know if you are legally able to work
                </h2>
            </section>
            <section className='flex flex-col gap-2 w-full'>
                <CustomLabel text='Birthday Date' />
                <DatePicker
                    selected={birthday}
                    onChange={(date: Date) => onBirthdayChange(date)}
                    className='color-667085 text-sm w-full bg-F2F4F7 rounded-lg p-3 outline-none'
                    dateFormat='dd/MM/yyyy'
                    placeholderText='dd/mm/yyyy'
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode='select'
                />
            </section>
            <CustomButton
                disabled={!birthday}
                text='Next'
                callback={() => onStepChange(CreateFormSteps.Experience)}
            />
        </React.Fragment>
    );
};

export default CreateUserStepBirthday;
