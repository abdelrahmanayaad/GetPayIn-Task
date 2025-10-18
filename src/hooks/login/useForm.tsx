import { useState } from 'react';

type InputsType = {
  username: string;
  password: string;
};
type InputsErrorType = {
  usernameError: string;
  passwordError: string;
};

const useForm = () => {
  const [inputs, setInputs] = useState<InputsType>({
    username: '',
    password: '',
  });
  const [inputsErrors, setInputsErrors] = useState<InputsErrorType>({
    usernameError: '',
    passwordError: '',
  });

  const handleInputChange = (field: keyof InputsType, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
    setInputsErrors(prev => ({ ...prev, [`${String(field)}Error`]: '' }));
  };

  const setErrors = (field: keyof InputsErrorType, value: string) => {
    setInputsErrors(prev => ({ ...prev, [field]: value }));
  };

  return {
    handleInputChange,
    setErrors,
    inputs,
    inputsErrors,
  };
};

export default useForm;
