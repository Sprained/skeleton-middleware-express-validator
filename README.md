Skeleton Middleware é um pacote feito para ajudar no retorno de erros do express-validator

## Instalação

```
yarn add skeleton-middleware-express-validator || npm i skeleton-middleware-express-validator
```

### Exemplo usu Middleware

```
import { validateMiddleware } from 'skeleton-middleware-express-validator'

router
  .route('/teste')
  .post(
    validateExpressValidator(), // Função de validação do express-validator
    validateMiddleware, // Middleware do skeleton-middleware para tratamento do retorno do express-validator
    function // Função do enrpoint
  )
```

