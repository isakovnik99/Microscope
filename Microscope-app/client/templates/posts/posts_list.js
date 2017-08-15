var postsData =[
     {
    title: 'Introducing Telescope',
    url: 'sachagreif.com/introducing-telescope/'
}, 
{
    title: 'Meteor',
    url: 'http://meteor.com'

},
{
    title: 'The meteor book',
    url:'http://themeteorbook.com'
}
];

Template.postsList.helpers({
    posts:postsData
});