export default {
    name: 'team',
    type: 'document',
    title: 'Team',
    fields: [
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'position',
            type: 'string',
            title: 'Position'
        },
        {
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ]
}