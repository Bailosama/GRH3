/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const TeacherController = () => import('#controllers/teachers_controller')
const CongesController = () => import('#controllers/CongesController')

router.group(() => {
  router.get('/', [TeacherController, 'dashboard']).as('dashbord.dashbord')
  router.get('/index', [TeacherController, 'index']).as('teachers.index')
  router.get('teachers/create', [TeacherController, 'form']).as('teachers.form')
  router.post('teachers/delete', [TeacherController, 'delete']).as('teachers.delete')
  router.get('teachers/:id', [TeacherController, 'details']).as('teachers.details')
  router.post('teachers/create', [TeacherController, 'store']).as('teachers.store')
  router.get('teachers/:id/edit', [TeacherController, 'editForm']).as('teachers.editform')
  router.post('teachers/:id/edit', [TeacherController, 'update']).as('teachers.edit')
})

router.group(() => {
  router.get('/conges', [CongesController, 'index']).as('conges.index')
  router.get('/addconge', [CongesController, 'addc']).as('addconge.addc')
  router.post('/conges/create', [CongesController, 'store'])
})
