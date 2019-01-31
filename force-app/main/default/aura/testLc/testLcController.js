({
    doInit : function(component, event, helper) {
        var action = component.get('c.getAllContacts');
        action.setCallback(this, function(responce) {
            var state = responce.getState();
            if (state === 'SUCCESS') {
                var options = responce.getReturnValue().map(function(contact) {
                    return {
                        'label': contact.Name, 
                        'value': contact.Id
                    };
                });
                component.set('v.options', options);
            }

        });
        $A.enqueueAction(action);
    },
    handleChange : function(component, event, helper) {
        var accountId = component.get('v.recordId');
        var selectedOptionValue = event.getParam('value');
        var action = component.get('c.setContact');
        action.setParams({ 
            accountId : accountId,
            contactId : selectedOptionValue
        });
        $A.enqueueAction(action);
    }
})
