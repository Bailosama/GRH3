import type { HttpContext } from '@adonisjs/core/http'
import { CongeValidator } from '#validators/conge'
import Conge from '#models/conge'

export default class CongesController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    return view.render('pages/teachers/conge')
  }
  async addc({ view }: HttpContext) {
    return view.render('pages/teachers/addconge')
  }
  async store({ request, response, session }: HttpContext) {
    try {
      await request.validateUsing(CongeValidator)
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { nom, date_debut, date_fin, motif, duree, etat } = request.all()
      const conge = new Conge()
      conge.nom = nom
      conge.date_debut = date_debut
      conge.date_fin = date_fin
      conge.motif = motif
      conge.duree = duree
      conge.etat = etat
      await conge.save()
      session.flash('success', 'Congé ajouté avec succès')
      return response.redirect().toRoute('post.store')
    } catch (error) {
      // En cas d'erreur, afficher un message d'erreur
      session.flash('error', "Une erreur est survenue lors de l'ajout du congé")
      return response.redirect('back')
    }
  }
}
