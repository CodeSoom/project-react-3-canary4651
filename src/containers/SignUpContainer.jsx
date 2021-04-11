import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import SignUp from '../components/SignUp';

import {
  changeLoginField,
  requestSignUp,
} from '../redux/slice';

import { get } from '../utils';

export default function SignUpContainer() {
  const history = useHistory();

  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));

  const handleChange = ({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  };

  const handleSubmit = () => {
    dispatch(requestSignUp());
    history.push('/sign-complete');
  };

  return (
    <SignUp
      fields={loginFields}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
