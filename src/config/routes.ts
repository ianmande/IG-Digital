import { routeInformation, typeRoutes } from 'types/route'

/**
 * Aquí se definen todas las rutas de la aplicacion
 * Es un array de objectos con la información necesaria para cada ruta
 * - label: es lo que se mostrara en la pestaña del navegador en la pagina actual
 * - path: es la ruta que hara macth para mostrar una pantalla
 * - compenent: ruta de component/modulo/page/view que reenderizara la vista actual
 * - type: tipo de rutas
 */

export const allRoutes: routeInformation[] = [
  {
    label: 'Inicio',
    path: '/',
    component: 'Home',
    type: typeRoutes.private,
  },
  {
    label: 'Crear cuenta',
    path: '/crear-cuenta',
    component: 'CreateAccount',
    type: typeRoutes.login,
  },
  {
    label: 'Iniciar sesion',
    path: '/iniciar-sesion',
    component: 'Login',
    type: typeRoutes.login,
  },
]
