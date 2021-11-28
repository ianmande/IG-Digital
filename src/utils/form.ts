interface IFormHandlerErrorMenssage {
  typeError: string | undefined
  messages: { [keyof: string]: string }
}

export const formHandlerErrorMenssage = ({
  typeError,
  messages,
}: IFormHandlerErrorMenssage) => (typeError ? messages[typeError] : '')

export const errorMessages: { [keyof: string]: string } = {
  required: 'Debe completar este campo para continuar',
  minLength: 'Este campo debe tener como mínimo 3 caracteres',
  maxLength: 'Este campo debe tener como máximo 20 caracteres',
}
