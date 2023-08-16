import { useRouter } from 'next/navigation';

export const CreateAccountButton = () => {
    const router = useRouter();

    const sendToCreateAccount = () => {
        router.push('/create-account');
    };

    return (
        <button className='btn-create mx-4' onClick={sendToCreateAccount}>
            Create account
        </button>
    );
};
