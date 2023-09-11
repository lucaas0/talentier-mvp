'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CreateUserStepEmail from '@/components/CreateUser/CreateUserStepEmail';
import { CreateFormSteps } from '@/utils/constants';
import CreateUserStepPassword from '@/components/CreateUser/CreateUserStepPassword';
import CreateUserStepName from '@/components/CreateUser/StepName';
import CreateUserStepBirthday from '@/components/CreateUser/StepBirthday';
import {
    JobPreferences,
    User,
    UserEducation,
    UserExperience,
} from '@/utils/utils';
import CreateUserStepExperience from '@/components/CreateUser/Experience';
import CreateUserStepViewExperiences from '@/components/CreateUser/ViewExperiences';
import CreateUserStepEducation from '@/components/CreateUser/Education';
import CreateUserStepViewEducations from '@/components/CreateUser/ViewEducations';
import CreateUserStepSkills from '@/components/CreateUser/Skills';
import CreateUserStepJobPreferences from '@/components/CreateUser/JobPreferences';
import CreateUserStepProfilePhoto from '@/components/CreateUser/ProfilePhoto';
import Done from '@/components/shared/Done';
import { createUserAction } from '../_actions';

const CreateUserAccount = () => {
    const [userData, setUserData] = useState<User>({
        email: '',
        password: '',
        name: '',
        birthday: new Date(),
        experiences: [],
        educations: [],
        skills: [],
        jobPreferences: {
            role: [],
            location: [],
            employmentType: [],
        },
        photoUrl: '',
    });

    const [activeStep, setActiveStep] = useState<CreateFormSteps>(
        CreateFormSteps.Email
    );

    const [editingExp, setEditingExp] = useState<UserExperience | undefined>(
        undefined
    );

    const [editingEducation, setEditingEducation] = useState<
        UserEducation | undefined
    >(undefined);

    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const { value, name } = e.currentTarget;

        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleStepChange = (newStep: CreateFormSteps) => {
        setActiveStep(newStep);
    };

    const handleEmailChange = (email: string) => {
        setUserData({
            ...userData,
            email,
        });
    };

    const handleBirthdateChange = (newBirthDate: Date) => {
        setUserData({
            ...userData,
            birthday: newBirthDate,
        });
    };

    const handleExperienceChange = (experience: UserExperience) => {
        const copy = { ...userData };

        if (editingExp) {
            const expIdx = copy.experiences.findIndex(
                (exp) => exp.uuid === experience.uuid
            );

            copy.experiences[expIdx] = experience;
        } else {
            copy.experiences = [...userData.experiences, experience];
        }

        setUserData({ ...copy });
        setEditingExp(undefined);
    };

    const handleEditingExp = (exp: UserExperience) => {
        setActiveStep(CreateFormSteps.Experience);
        setEditingExp(exp);
    };

    const handleEditingEducation = (education: UserEducation) => {
        setActiveStep(CreateFormSteps.Education);
        setEditingEducation(education);
    };

    const handleEducationChange = (education: UserEducation) => {
        const copy = { ...userData };

        if (editingEducation) {
            const educationIdx = copy.educations.findIndex(
                (e) => e.uuid === education.uuid
            );

            copy.educations[educationIdx] = education;
        } else {
            copy.educations = [...userData.educations, education];
        }

        setUserData({ ...copy });
        setEditingEducation(undefined);
    };

    const handleSkillsChange = (skills: string[]) => {
        const copy = { ...userData };

        copy.skills = [...skills];

        setUserData({ ...copy });
    };

    const handleJobPreferencesChange = (preferences: JobPreferences) => {
        const copy = { ...userData };

        copy.jobPreferences = { ...preferences };

        setUserData({ ...copy });
    };

    const handleDone = async () => {
        const createdUser = await createUserAction(userData);

        if (createdUser) {
            setActiveStep(CreateFormSteps.Done);
        }
    };

    return (
        <AnimatePresence>
            <motion.main
                className='flex flex-col w-full h-full max-w-md p-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ type: 'tween', duration: 1 }}
            >
                {activeStep === CreateFormSteps.Email && (
                    <CreateUserStepEmail
                        onEmailChange={handleEmailChange}
                        onStepChange={handleStepChange}
                    />
                )}
                {activeStep === CreateFormSteps.Password && (
                    <CreateUserStepPassword
                        password={userData.password}
                        onPasswordChange={handleFieldChange}
                        onStepChange={handleStepChange}
                    />
                )}
                {activeStep === CreateFormSteps.Name && (
                    <CreateUserStepName
                        name={userData.name}
                        onNameChange={handleFieldChange}
                        onStepChange={handleStepChange}
                    />
                )}
                {activeStep === CreateFormSteps.Birthday && (
                    <CreateUserStepBirthday
                        birthday={userData.birthday}
                        onBirthdayChange={handleBirthdateChange}
                        onStepChange={handleStepChange}
                    />
                )}
                {activeStep === CreateFormSteps.Experience && (
                    <CreateUserStepExperience
                        userName={userData.name}
                        onExperienceChange={handleExperienceChange}
                        onStepChange={handleStepChange}
                        experience={editingExp}
                    />
                )}
                {activeStep === CreateFormSteps.ViewExperiences && (
                    <CreateUserStepViewExperiences
                        experiences={userData.experiences}
                        onStepChange={handleStepChange}
                        onEditExp={handleEditingExp}
                    />
                )}
                {activeStep === CreateFormSteps.Education && (
                    <CreateUserStepEducation
                        onEducationChange={handleEducationChange}
                        onStepChange={handleStepChange}
                        education={editingEducation}
                    />
                )}
                {activeStep === CreateFormSteps.ViewEducations && (
                    <CreateUserStepViewEducations
                        educations={userData.educations}
                        onStepChange={handleStepChange}
                        onEdit={handleEditingEducation}
                    />
                )}

                {activeStep === CreateFormSteps.Skills && (
                    <CreateUserStepSkills
                        onStepChange={handleStepChange}
                        onSkillsChange={handleSkillsChange}
                    />
                )}

                {activeStep === CreateFormSteps.JobPreferences && (
                    <CreateUserStepJobPreferences
                        onStepChange={handleStepChange}
                        onJobPreferencesChange={handleJobPreferencesChange}
                    />
                )}

                {activeStep === CreateFormSteps.ProfilePhoto && (
                    <CreateUserStepProfilePhoto
                        onStepChange={handleStepChange}
                        onPhotoChange={(photoUrl) =>
                            setUserData({
                                ...userData,
                                photoUrl,
                            })
                        }
                        onDone={handleDone}
                    />
                )}

                {activeStep === CreateFormSteps.Done && (
                    <Done name={userData.name} email={userData.email} />
                )}
            </motion.main>
        </AnimatePresence>
    );
};

export default CreateUserAccount;
