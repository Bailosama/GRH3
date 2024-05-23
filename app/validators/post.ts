import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const createPostValidator = vine.compile(
  vine.object({
    title: vine.string().trim().alphaNumeric({ allowSpaces: true }).toUpperCase(),
    content: vine.string().trim().maxLength(1000),
  })
)

const messages = {
  'title': 'Le titre ne doit contenir que des lettres et des chiffres',
  'title.alphaNumeric': 'Le titre ne doit contenir que des lettres et des chiffres',
  'content': 'Le contenu doit être du texte',
  'content.maxLength': 'Le contenu ne doit pas dépasser 1000 caracteres',
}

createPostValidator.messagesProvider = new SimpleMessagesProvider(messages)
