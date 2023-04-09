// schemas/pet.js
export default {
    name: 'contact',
    type: 'document',
      title: 'Contact',
    fields: [
      {
        name: 'email',
        type: 'string',
        title: 'Email'
      },
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'message',
        type: 'string',
        title: 'Message'
      },
    ]
  }