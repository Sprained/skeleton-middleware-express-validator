interface IFieldErros {
  id?: string
  message?: string
}

export class Handler extends Error {
  public statusCode: number
  fieldErrors: IFieldErros


  constructor(fieldErrors: IFieldErros) {
    super('There are validation errors.')
    this.fieldErrors = fieldErrors
    this.statusCode = 422
  }
}
