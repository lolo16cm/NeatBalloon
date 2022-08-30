import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';



import { SignInContainer, ButtonsContainer } from './sign-in-form.styles.jsx';
import { auth } from '../../utils/firebase/firebase.utils';
import { sendPasswordResetEmail } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';




const defaultFormFields = {
    email: '',
};

const ForgetPasswordForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };
    const navigate = useNavigate();






    const handleSubmit = async (event) => {
        event.preventDefault();


        try {


            const config = {
                url: 'http://localhost:3000/auth'
            }
            await sendPasswordResetEmail(auth, email, config).then(() => {
                navigate(-1);

            })
                .catch(() => {

                    alert('email not found');
                });

        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <SignInContainer>
            <h2>Forget Password</h2>

            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />


                <ButtonsContainer>
                    <Button type='submit'>Email Password</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
};

export default ForgetPasswordForm;