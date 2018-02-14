import Route from '@ember/routing/route';
export default Route.extend({
    model() {
        return [ 'Hendrix',
                'Gallagher',
                'Gilmour']
    }

});
