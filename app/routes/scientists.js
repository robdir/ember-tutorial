import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return ['Nicola Tesla',
                'Alexander Graham Bell',
                'Marie Curie']
    }
});
