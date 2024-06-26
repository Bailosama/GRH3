import type { HttpContext } from '@adonisjs/core/http'
import Teacher from '#models/teacher'
import { GenderText } from '#enums/gender_type'
import type { IGender } from '#enums/gender_type'
import { DepartmentNameText } from '#enums/departments_name'
import type { IDepartmentName } from '#enums/departments_name'
import { createTeacherValidator, deleteTeacherValidator } from '#validators/teacher'

import teacher from '#models/teacher'

export default class TeachersController {
  async form({ view }: HttpContext) {
    return view.render('pages/teachers/form')
  }
  async dashboard({ view }: HttpContext) {
    // Vous pouvez ajouter d'autres données nécessaires pour le dashboard ici
    const teacher = await Teacher.all()

    // Rendre la vue du dashboard avec les données nécessaires
    return view.render('pages/teachers/dashbord')
  }

  async index({ view }: HttpContext) {
    const teachers = await Teacher.all()
    return view.render('pages/teachers/index', { teachers })
  }
  async details({ view, params, response }: HttpContext) {
    try {
      const teachers = await Teacher.findOrFail(params.id)

      return view.render('pages/teachers/details', { teacher })
    } catch (error) {
      response.redirect().toPath('pages/errors/not_found')
    }
  }
  async store({ request, response, session }: HttpContext) {
    const { gender, department, ...payload } = await request.validateUsing(createTeacherValidator)

    try {
      const teacher = new Teacher()
      teacher.fill(payload)
      teacher.department = DepartmentNameText[department as IDepartmentName]
      teacher.gender = GenderText[gender as IGender]
      await teacher.save()

      session.flash('success', 'Enseignant ajouté avec succès')
      response.redirect().toRoute('teachers.index')
    } catch (error) {
      session.flash('error', "Erreur survenu lors de l'ajout de l'enseignant")
      console.error(error)
      response.redirect().toRoute('teachers.index')
    }
  }

  async editForm({ view, params, response }: HttpContext) {
    try {
      const teacher = await Teacher.findOrFail(params.id)
      return view.render('pages/teachers/edit', { teacher, DepartmentNameText, GenderText })
    } catch (error) {
      response.redirect().toPath('pages/errors/not_found')
    }
  }
  async update({ request, params, response }: HttpContext) {
    const { gender, department, ...payload } = await request.validateUsing(createTeacherValidator)

    try {
      const teacher = await Teacher.findOrFail(params.id)
      teacher.merge(payload)
      teacher.department = DepartmentNameText[department as IDepartmentName]
      teacher.gender = GenderText[gender as IGender]
      await teacher.save()

      response.redirect().toRoute('teachers.index')
    } catch (error) {
      console.error(error)
      response.redirect().toRoute('teachers.index')
    }
  }
  async delete({ response, request }: HttpContext) {
    const { id } = await request.validateUsing(deleteTeacherValidator)

    try {
      const teacher = await Teacher.findOrFail(id)
      await teacher.delete()

      response.redirect().toRoute('teachers.index')
    } catch (error) {
      console.error(error)
      response.redirect().toRoute('teachers.index')
    }
  }
}
