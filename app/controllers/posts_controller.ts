import type { HttpContext } from '@adonisjs/core/http'

import Post from '#models/post'
import { createPostValidator } from '#validators/post'

export default class PostsController {
  async index({ view }: HttpContext) {
    const posts = await Post.all()

    return view.render('pages/posts/index', { posts })
  }

  async creationForm({ view }: HttpContext) {
    return view.render('pages/posts/form')
  }

  async store({ request, response, session }: HttpContext) {
    // recuperer les donnes du formulaire
    const data = await request.validateUsing(createPostValidator)

    // creer un post avec le model
    try {
      await Post.create(data)
      session.flash('success', 'Post créer avec succès')
    } catch (error) {
      session.flash('error', 'Impossible de créer le post')
    }
    return response.redirect().toRoute('index')
  }

  async details({ params, view }: HttpContext) {
    const { id } = params

    try {
      const post = await Post.findOrFail(id)

      return view.render('pages/posts/details', { post })
    } catch (error) {
      return view.render('pages/errors/not_found', { id })
    }
  }
}
