import vine from '@vinejs/vine'

export class StageValidator {
  get rules() {
    return {
      nom: 'required',
      prenom: 'required',
      age: 'required|integer',
      sexe: 'required',
      date_naissance: 'required|date',
      ville: 'required',
      adresse: 'required',
      etablissement: 'required',
      formation: 'required',
      encadrant: 'required',
    }
  }

  get messages() {
    return {
      required: 'Le champ {{ field }} est requis',
      integer: 'Le champ {{ field }} doit être un entier',
      date: 'Le champ {{ field }} doit être une date valide',
    }
  }
}
