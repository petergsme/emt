import { useEffect, useRef, useState } from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { RegisterFormData } from "../RegisterFormData";
import classNames from "classnames/bind";
import theme from "./formSelect.module.scss";
import { Icon, IconName } from "../../../assets/icons/Icon";

const cx = classNames.bind(theme);

interface FormSelectProps {
  type: keyof RegisterFormData;
  leadingIcon: IconName;
  errors: FieldErrors<RegisterFormData>;
  control: Control<RegisterFormData>;
  required?: boolean;
}

export const FormSelect = ({ type, control, errors, required = true, leadingIcon }: FormSelectProps) => {
  const { t } = useTranslation("form");

  const [isOpen, setIsOpen] = useState(false);
  const dropdownNode = useRef<HTMLDivElement>(null);
  // La clave esta en que el CURRENT del elemento que al que ponemos nuestra ref contiene una referencia real al DOM de ese elemento. Importa porque nosotros no tenemos acceso directo al arbol de react a traves del queryselector de js en el navegador.
  // El tipado del useref sirve para decirle que elemento lo recibe.

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!dropdownNode.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    // Montada fuera porque tenemos que limpiarla luego en cada rerender.
    // Todos los eventos tienen un target que es lo que necesitabamos utilizar aqui, aquí nos dice quien recibe el click.
    // Contains es simplemente una función que comprueba si un elemento contiene otro en el arbol html.
    // Estamos comprobando si el elemento que recibe el click (event.target) esta dentro del elemento que lleva nuestra REF (que si el click se ha hecho en algo dentro del dropdown vamos.)
    // El tipado del event es este y no "React.ChangeEvent<HTMLInputElement>" porque estabamos trabajando con un addEventListener nativo, si estuviera en un onClick de un componente usaríamos este.

    // La explicación del "as Node" para que no se queje viene de este articulo de medium.
    // https://medium.com/@turingvang/eventtarget-is-not-assignable-to-parameter-of-type-node-efe9b8cbf902

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
    // Tenemos que ejecutar una función de limpieza del listener, o de lo contrario tendríamos problemas por donde lo hemos puesto.
  }, []);

  const hasError = errors[type] ? true : false;

  const options: string[] = [];
  switch (type) {
    case "contact":
      options.push(
        t("contactSelect.fault"),
        t("contactSelect.lost"),
        t("contactSelect.issues"),
        t("contactSelect.other")
      );
      break;
    case "documentType":
      options.push(t("documentType.dni"), t("documentType.nie"), t("documentType.passport"));
      break;
    case "refill":
      options.push(t("refill.bonobus.option1"), t("refill.bonobus.option2"), t("refill.bonobus.option3"));
      break;
  }

  return (
    <article className={theme.select__wrapper}>
      <label
        className={cx({
          "paragraph-xsmall": true,
          select__label: true,
          "select__label--error": hasError,
        })}
        htmlFor={type}
      >
        {t(`labels.${type}`)}
      </label>

      <div
        className={hasError ? theme["select__container--error"] : theme.select__container}
        ref={dropdownNode}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Ref tiene que ir aquí arriba en todo el contenedor para poder desplegar el dropdown, si estuviera abajo, hacer click aquí contaría como click fuera del dropdown asi que abriria y cerraria. */}
        <span className={theme.select__iconGroup}>
          <Icon icon={leadingIcon} size="small" color="onprimary" />

          <Controller
            control={control}
            name={type}
            rules={{ required: required ? t("errors.required") : false }}
            render={({ field }) => (
              // Este div es el equivalente a la caja que contiene el select.
              <div className={theme.select__field}>
                {/* Este botón viene siendo nuestro select en si mismo. */}
                <button
                  type="button"
                  className={cx({
                    "paragraph-small": true,
                    select__trigger: true,
                    "select__trigger--placeholder": !field.value,
                  })}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {field.value || t(`placeholders.${type}`)}
                </button>

                {isOpen && (
                  // Este div es el contenedor de nuestro dropdown.
                  <div className={theme.select__dropdown}>
                    {/* Los divs que se mapean son nuestros options */}
                    {options.map((value, index) => (
                      <div
                        key={index}
                        className={cx({
                          "paragraph-small": true,
                          select__option: true,
                          "select__option--selected": field.value === value,
                        })}
                        onClick={() => {
                          field.onChange(value);
                          setIsOpen(false);
                        }}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          />
        </span>

        {required && (
          <Icon
            icon="ChevronDown"
            size="small"
            color="onprimary"
            extraClass={isOpen ? theme["select__chevron--open"] : theme.select__chevron}
          />
        )}
      </div>
      {errors[type] && <span className={`paragraph-xsmall ${theme.select__errorMessage}`}>{errors[type].message}</span>}
    </article>
  );
};

// Cuanto en detalle quieres que hable del componente. "Voy a ir bloque por bloque explicandolo si quereis que vaya mas rapido o mas en detalle decidme sin problema".
// No entres demasiado en detalle, se practico y sencillo.
// Saltate todo aquello que no valga la pena explicar.
// Explica las cosas de manera muchísimo más natural como hace Josmi, conviertiendo un "IF..." en un "Si..." vuelvelo algo natural.
// Cuanto más expliques más te pueden pillar. Si hay un silencio incomodo, aguanta, no sigas hablando, o sal con una pregunta.
// Github ponle fotos en el readme de tu pagina para que se vea.
// Currate aprender sobre la empresa, para una entrevista, diles lo que quieren oir.

// Ve a charlas de TECH, busca las empresas en linkedIN y echa curriculum.
// En redes conecta con peña así.

// Se mas coherente con el uso de classnames, usalo para todo si lo usas.
// Crea componentes mas genericos donde pases objetos y arrays y las traducciones esten en ellos. No pases tipos tan especificos ligados a textos traducidos, eso crea componentes muy restringidos. Quieres escalabilidad, no restricción.

// Cuidado si usas BEM, se asume que esas modificaciones son hijas de una clase padre osea que no puedes hacer esto:

// .section {}
// .section--error {}

// Tendrías que hacer:

// .section {
//
//    &--error {}
// }

// Cambia el formulario para que la validacion sea tras quitar el focus.
// Anota bien lo de las traducciones.
// Componentes mas genericos.

// Tienes muchisimo que aprender y meter de accesibilidad. Sobre inputs que ocupen todo el campo, labels...
// También has prestado muy poca atención a los componentes de layout con children/contenido variable. Ten cuidado.
