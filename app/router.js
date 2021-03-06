import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	
    this.resource('posts', { path: '/' } , function() {

       this.route('recent');
       this.route('trending');

       this.route('new', { path: 'post/new' });
       this.route('show', { path: 'post/:id' }, function(){
	       
           this.resource('comments', function(){

               this.route('new', { path: 'comment/new' });
               this.route('show', { path: 'comment/:id' });
               this.route('edit', { path: ':id/edit' });
               this.route('delete', { path: ':id/delete' });

           });
       });    

       this.route('edit', { path: ':id/edit' });
       this.route('delete', { path: ':id/delete' });

    });    


    this.resource('brands', function() {

        this.route('new', { path: 'brand/new' });
        this.route('show', { path: 'brand/:id' });
        this.route('edit', { path: ':id/edit' });
        this.route('delete', { path: ':id/delete' });

    });    


    this.resource('users', function() {

        this.route('new', { path: 'user/new' });
        this.route('show', { path: 'user/:id' });
        this.route('edit', { path: ':id/edit' });
        this.route('delete', { path: ':id/delete' });

    });   

});

export default Router;
