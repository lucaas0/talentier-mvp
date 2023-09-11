import React, { useState } from 'react';
import CreateFormHeader from '../shared/CreateFormHeader';
import { CustomButton } from '../shared/NextButton';
import { CreateFormSteps, skills } from '@/utils/constants';

import { ChipButton } from '../shared/Chip';

interface CreateUserSkillsProps {
    onSkillsChange: (skills: string[]) => void;
    onStepChange: (nextStep: CreateFormSteps) => void;
}

const CreateUserStepSkills = ({
    onSkillsChange,
    onStepChange,
}: CreateUserSkillsProps) => {
    const onStepBack = () => {
        onStepChange(CreateFormSteps.JobPreferences);
    };

    const [userSkills, setUserSkills] = useState<string[]>([]);

    const isNextDisabled = () => {
        return userSkills.length < 3;
    };

    const onNextClick = () => {
        onSkillsChange(userSkills);
        onStepChange(CreateFormSteps.JobPreferences);
    };

    const handleChipSelected = (value: string) => {
        if (userSkills.includes(value)) {
            const copy = [...userSkills];

            const idx = userSkills.findIndex((v) => v === value);
            copy.splice(idx, 1);

            setUserSkills([...copy]);
        } else {
            setUserSkills([...userSkills, value]);
        }
    };

    return (
        <section className='scrollable-container'>
            <CreateFormHeader onStepBack={onStepBack} />
            <section className='flex flex-col w-full my-8'>
                <h1 className='color-222 text-xl font-extrabold mr-8'>
                    Add skills that best describes you
                </h1>
                <h2 className='color-667085 text-sm font-medium'>
                    {`Don't worry you can always edit this later`}
                </h2>
            </section>
            <section className='w-full my-8'>
                {skills.map((skill) => {
                    return (
                        <ChipButton
                            text={skill}
                            selected={userSkills.includes(skill)}
                            callback={() => handleChipSelected(skill)}
                            key={skill}
                        />
                    );
                })}
            </section>
            <CustomButton
                disabled={isNextDisabled()}
                text='Next'
                callback={onNextClick}
            />
        </section>
    );
};

export default CreateUserStepSkills;
