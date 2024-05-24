/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const PostController = () => import('#controllers/posts_controller')
const TeacherController = () => import('#controllers/teachers_controller')

router.group(() => {
  router.get('posts', [PostController, 'index']).as('index')
  router.get('posts/:id', [PostController, 'details']).as('posts.details')
  router.get('posts/create', [PostController, 'creationForm']).as('posts.form')
  router.post('posts/create', [PostController, 'store']).as('posts.store')
})

router.group(() => {
  router.get('/', [TeacherController, 'index']).as('teachers.index')
  router.get('teachers/create', [TeacherController, 'form']).as('teachers.form')
  router.post('teachers/delete', [TeacherController, 'delete']).as('teachers.delete')
  router.get('teachers/:id', [TeacherController, 'details']).as('teachers.details')
  router.post('teachers/create', [TeacherController, 'store']).as('teachers.store')
  router.get('teachers/:id/edit', [TeacherController, 'editForm']).as('teachers.editform')
  router.post('teachers/:id/edit', [TeacherController, 'update']).as('teachers.edit')
})
