import React, { useState } from 'react';
import CreateFormHeader from '../shared/CreateFormHeader';
import { CustomButton } from '../shared/NextButton';
import {
    CreateFormSteps,
    jobRoles,
    jobLocations,
    employmentTypes,
} from '@/utils/constants';

import { ChipButton } from '../shared/Chip';
import { JobPreferences } from '@/utils/utils';

interface CreateUserJobPreferencesProps {
    onJobPreferencesChange: (preferences: JobPreferences) => void;
    onStepChange: (nextStep: CreateFormSteps) => void;
}

const CreateUserStepJobPreferences = ({
    onJobPreferencesChange,
    onStepChange,
}: CreateUserJobPreferencesProps) => {
    const onStepBack = () => {
        onStepChange(CreateFormSteps.Skills);
    };

    const [userPreferences, setUserPreferences] = useState<JobPreferences>({
        role: [],
        employmentType: [],
        location: [],
    });

    const isNextDisabled = () => {
        return (
            userPreferences.role.length === 0 ||
            userPreferences.employmentType.length === 0 ||
            userPreferences.location.length === 0
        );
    };

    const onNextClick = () => {
        onJobPreferencesChange(userPreferences);
        onStepChange(CreateFormSteps.ProfilePhoto);
    };

    const handleChipSelected = (type: string, value: string) => {
        if (userPreferences[type].includes(value)) {
            const copy = [...userPreferences[type]];

            const idx = copy.findIndex((v) => v === value);
            copy.splice(idx, 1);

            setUserPreferences({
                ...userPreferences,
                [type]: copy,
            });
        } else {
            setUserPreferences({
                ...userPreferences,
                [type]: [...userPreferences[type], value],
            });
        }
    };

    return (
        <section className='scrollable-container'>
            <CreateFormHeader onStepBack={onStepBack} />
            <section className='flex flex-col w-full my-8'>
                <h1 className='color-222 text-xl font-extrabold mr-8'>
                    Job Preferences
                </h1>
                <h2 className='color-667085 text-sm font-medium'>
                    {`Don't worry you can always edit this later`}
                </h2>
            </section>

            <h1 className='color-222 text-xl font-extrabold mr-8'>Roles</h1>
            <section className='w-full my-8 h-1/5 scrollable-container'>
                {jobRoles.map((role) => {
                    return (
                        <ChipButton
                            text={role}
                            selected={userPreferences.role.includes(role)}
                            callback={() => handleChipSelected('role', role)}
                            key={role}
                        />
                    );
                })}
            </section>

            <h1 className='color-222 text-xl font-extrabold mr-8'>
                Job Location
            </h1>

            <section className='w-full my-8 scrollable-container'>
                {jobLocations.map((location) => {
                    return (
                        <ChipButton
                            text={location}
                            selected={userPreferences.location.includes(
                                location
                            )}
                            callback={() =>
                                handleChipSelected('location', location)
                            }
                            key={location}
                        />
                    );
                })}
            </section>

            <h1 className='color-222 text-xl font-extrabold mr-8'>
                Employment Type
            </h1>

            <section className='w-full my-8 scrollable-container'>
                {employmentTypes.map((type) => {
                    return (
                        <ChipButton
                            text={type}
                            selected={userPreferences.employmentType.includes(
                                type
                            )}
                            callback={() =>
                                handleChipSelected('employmentType', type)
                            }
                            key={type}
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

export default CreateUserStepJobPreferences;
