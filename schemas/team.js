export default {
  name: 'team',
  type: 'document',
  title: 'Team',
  fields: [
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'position',
      type: 'string',
      title: 'Position',
    },
    {
      name: 'twitterLink',
      type: 'string',
      title: 'Twitter Link',
    },
    {
      name: 'linkedinLink',
      type: 'string',
      title: 'Linkedin Link',
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
