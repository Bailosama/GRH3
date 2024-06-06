import vine from '@vinejs/vine'

export const CongeValidator = vine.compile(
  vine.object({
    nom: vine.string(),
    date_debut: vine.date(),
    date_fin: vine.date(),
    motif: vine.string(),
    duree: vine.number(),
    etat: vine.string(),
  })
)
