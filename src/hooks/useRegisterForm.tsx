import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { RegisterFormData } from '@/components/forms/RegisterFormData';

export const useRegisterForm = () => {
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

  return {
    register,
    control,
    handleSubmit,
    errors,
    watch,
  };
};
