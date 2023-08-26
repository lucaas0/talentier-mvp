import React, { useState } from 'react';
import CreateFormHeader from '../shared/CreateFormHeader';
import { NextButton } from '../shared/NextButton';
import {
    CreateFormSteps,
    jobRoles,
    jobLocations,
    employmentTypes,
} from '@/utils/constants';

import { ChipButton } from '../shared/Chip';
import { JobPreferences } from '@/utils/utils';
import Image from 'next/image';

interface CreateUserPhotoProps {
    onPhotoChange: (photoUrl: string) => void;
    onStepChange: (nextStep: CreateFormSteps) => void;
}

const CreateUserStepProfilePhoto = ({
    onPhotoChange,
    onStepChange,
}: CreateUserPhotoProps) => {
    const onStepBack = () => {
        onStepChange(CreateFormSteps.Skills);
    };

    const [profilePhoto, setProfilePhoto] = useState<string>('');

    const onNextClick = () => {
        onPhotoChange(profilePhoto);
        onStepChange(CreateFormSteps.Done);
    };

    // On file select (from the pop up)
    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Update the state
        if (event.target.files) {
            setProfilePhoto(URL.createObjectURL(event.target.files[0]));
        }
    };

    return (
        <section className='scrollable-container'>
            <CreateFormHeader onStepBack={onStepBack} />
            <section className='flex flex-col w-full my-8'>
                <h1 className='color-222 text-xl font-extrabold mr-8'>
                    {!profilePhoto && 'Add profile photo'}
                    {profilePhoto && 'Profile photo added'}
                </h1>
                <h2 className='color-667085 text-sm font-medium'>
                    {!profilePhoto &&
                        `Add profile photo so people know it’s you.`}
                </h2>
            </section>

            <section
                className='flex justify-center'
                style={{ position: 'relative' }}
            >
                <div className='pic-holder'>
                    <Image src={profilePhoto} width={152} height={152} alt='' />
                    <input
                        type='file'
                        name='profile_pic'
                        id='newProfilePhoto'
                        accept='image/*'
                        style={{
                            opacity: 0,
                            cursor: 'pointer',
                            position: 'absolute',
                            zIndex: 10,
                        }}
                        onChange={onFileChange}
                    />
                    <label
                        className={`upload-file-block ${
                            profilePhoto ? '!bg-transparent' : ''
                        }`}
                    >
                        <Image
                            src='/camera.svg'
                            width={40}
                            height={40}
                            alt=''
                        />
                    </label>
                </div>
            </section>

            <NextButton disabled={false} text='Next' callback={onNextClick} />
        </section>
    );
};

export default CreateUserStepProfilePhoto;
