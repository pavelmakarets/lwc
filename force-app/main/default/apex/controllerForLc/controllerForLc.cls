public with sharing class controllerForLc {

    public controllerForLc() {  
    }

    @AuraEnabled
    public static List<Contact> getAllContacts() {
        return [SELECT Id, Name FROM Contact];
    }

    @AuraEnabled
    public static void setContact(Id accountId, Id contactId){
      Contact contact = [SELECT Id, AccountId FROM Contact WHERE Id = :contactId];
      contact.AccountId = accountId;
      update contact;
    }

}
