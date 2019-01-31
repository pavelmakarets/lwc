({
    generateCard: function(component, event, helper) {
        //var cardViews = component.get('v.cardViews');
        /*var cardMarkup = [
            'lightning:layoutItem',
            {
                size: '2',
                padding: 'around-small',
                body: String.valueOf(component.get('v.cards').length)'1'
                body: [
                    'lightning:card',
                    {
                        title: 1
                    }
                ]
            }
        ];*/
        $A.createComponent('lightning:layoutItem', {
                size: '2',
                padding: 'around-small',
                body: (component.get('v.cards').length + 1).toString()
                /*body: [
                    'lightning:card',
                    {
                        title: 1
                    }
                ]*/
        },
        function(card, status, errorMessage) {
            if (status === 'SUCCESS') {
                var cards = component.get('v.cards');
                /*components.forEach(function(card) {
                    cards.push(card);
                });*/
                cards.push(card);
                component.set('v.cards', cards);
            } else {
                console.log(errorMessage);
            }
        });
    }
})
