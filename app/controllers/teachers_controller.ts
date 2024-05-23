import type { HttpContext } from '@adonisjs/core/http'
import teacher from '#models/teacher'

export default class TeachersController {
  async form({ view }: HttpContext) {
    return view.render('pages/teachers/form')
  }
}
