// schemas/pet.js
export default {
  name: 'join',
  type: 'document',
  title: 'Join',
  fields: [
    {
      name: 'firstname',
      type: 'string',
      title: 'First Name',
    },
    {
      name: 'lastname',
      type: 'string',
      title: 'Last Name',
    },
    {
      name: 'stateOfOrigin',
      type: 'string',
      title: 'State Of Origin',
    },
    {
      name: 'gender',
      type: 'string',
      title: 'Gender',
    },
    {
      name: 'dob',
      type: 'string',
      title: 'DOB',
    },
    {
      name: 'phoneNumber',
      type: 'string',
      title: 'Phone Number',
    },
    {
      name: 'AcadQual',
      type: 'string',
      title: 'Academic Qualification',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email Address',
    },
    {
      name: 'exp',
      type: 'string',
      title: 'Coding Experience',
    },
    {
      name: 'html',
      type: 'string',
      title: 'HTML',
    },
    {
      name: 'css',
      type: 'string',
      title: 'CSS',
    },
    {
      name: 'javascript',
      type: 'string',
      title: 'Javascript',
    },
    {
      name: 'other',
      type: 'string',
      title: 'None Of The Above',
    },
  ],
}
