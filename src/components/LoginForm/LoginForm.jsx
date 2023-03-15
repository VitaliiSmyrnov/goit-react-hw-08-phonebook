import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Wrapper, StyledForm, StyledButton } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Email must be in the format username@domain.com"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Password must contain at least one number, one lowercase and one uppercase letter, and be at least 8 characters long."
            required
          />
        </label>
        <StyledButton type="submit">Log In</StyledButton>
      </StyledForm>
    </Wrapper>
  );
};
