import type { HttpContext } from '@adonisjs/core/http'

export default class CongesController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const conges = await conge.all()
    return view.render('conge.index')
  }
}
