import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';



import { SignInContainer, ButtonsContainer } from './sign-in-form.styles.jsx';

import { useDispatch } from 'react-redux/es/exports';





const defaultFormFields = {
    email: '',
};

const ForgetPasswordForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email } = formFields;







    const handleSubmit = async (event) => {
        event.preventDefault();


        try {




        } catch (error) {
            console.log('user sign in failed', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <SignInContainer>
            <h2>Email Password</h2>

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