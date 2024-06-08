import { HttpContext } from '@adonisjs/core/http'
import Stagiaire from '#models/stagiaire'

export default class StagesController {
  /**
   * Display a list of stagiaires
   */
  async index({ view }: HttpContext) {
    const stagiaires = await Stagiaire.all()
    return view.render('pages/teachers/addstage', { stagiaires })
  }

  /**
   * Display form to create a new stagiaire
   */
  async create({ view }: HttpContext) {
    return view.render('pages/teachers/addstagiaire')
  }

  /**
   * Handle form submission for creating a new stagiaire
   */
  async store({ request, response }: HttpContext) {
    const data = request.only([
      'nom',
      'prenom',
      'age',
      'sexe',
      'date_naissance',
      'ville',
      'adresse',
      'etablissement',
      'formation',
      'encadrant',
    ])

    const stagiaire = await Stagiaire.create(data)
    return response.redirect().toRoute('dashbord.dashbord')
  }

  /**
   * Show individual stagiaire
   */
  async show({ params, view }: HttpContext) {
    const stagiaire = await Stagiaire.find(params.id)
    return view.render('pages/teachers/showstagiaire', { stagiaire })
  }

  /**
   * Display form to edit individual stagiaire
   */
  async edit({ params, view }: HttpContext) {
    const stagiaire = await Stagiaire.find(params.id)
    return view.render('pages/teachers/editstagiaire', { stagiaire })
  }

  /**
   * Handle form submission for editing individual stagiaire
   */
  async update({ params, request, response }: HttpContext) {
    const stagiaire = await Stagiaire.find(params.id)
    if (!stagiaire) {
      return response.status(404).json({ message: 'Stagiaire non trouvé' })
    }

    const data = request.only([
      'nom',
      'prenom',
      'age',
      'sexe',
      'date_naissance',
      'ville',
      'adresse',
      'etablissement',
      'formation',
      'encadrant',
    ])

    stagiaire.merge(data)
    await stagiaire.save()

    return response.redirect().toRoute('stagiaires.index')
  }

  /**
   * Delete stagiaire
   */
  async destroy({ params, response }: HttpContext) {
    const stagiaire = await Stagiaire.find(params.id)
    if (!stagiaire) {
      return response.status(404).json({ message: 'Stagiaire non trouvé' })
    }

    await stagiaire.delete()

    return response.redirect().toRoute('stagiaires.index')
  }
}
