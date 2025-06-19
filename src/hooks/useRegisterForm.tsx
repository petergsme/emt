import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { RegisterFormData } from '@/components/forms/RegisterFormData';

interface useRegisterFormProps {
  setIsOpenSection: (value: boolean) => void;
}

export const useRegisterForm = ({ setIsOpenSection }: useRegisterFormProps) => {
  const [isClosingModal, setIsClosingModal] = useState(false);
  const [isClosingSection, setIsClosingSection] = useState(false);
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);
  const [isOpenExit, setIsOpenExit] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>({ mode: 'onBlur' });

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  // Muy sencillo, al montarse el body deja de poderse scrollear, al desmontarse vuelve a poderse.
  // Puesto abajo del todo porque arriba van todos los hooks/custom hooks que importamos y eso debe ir seguido.

  const handleExitModal = (stopExecution: boolean) => {
    setIsClosingModal(true);
    if (stopExecution) {
      setIsClosingSection(true);
    }
    setTimeout(() => {
      if (isOpenExit && !stopExecution) {
        setIsOpenExit(false);
      }

      if (isOpenSuccess) {
        setIsOpenSuccess(false);
      }

      if (stopExecution) {
        setIsOpenSection(false);
      }
      setIsClosingModal(false);
      setIsClosingSection(false);
    }, 280);
  };

  return {
    register,
    control,
    handleSubmit,
    errors,
    watch,
    handleExitModal,
    isClosingModal,
    isClosingSection,
    isOpenExit,
    setIsOpenExit,
    isOpenSuccess,
    setIsOpenSuccess,
  };
};
