export enum EContactType {
    LEAD = "LEAD",
    PATIENT = "PATIENT"
}

export interface IOwner {
    id: string;
    fullName: string;
}

export interface IContactTag {
    tagID: string;
    contactID: string;
    content: string;
}

export interface ITag {
    id: string;
    content: string;
}

export interface IContactLeadSource {
    leadSourceID: string;
    contactID: string;
    content: string;
}

export interface ILeadSource {
    id: string;
    content: string;
}

export interface IContact {
    id: string;
    owner: IOwner;
    fullName: string;
    emailAddress: string;
    phoneNumber: string;
    status: string;
    addedOn: string;
    contactType: EContactType;
    tags: IContactTag[];
    leadSources: IContactLeadSource[];
}

export interface IAddContactData {
    owner: IOwner;
    fullName: string;
    emailAddress: string;
    phoneNumber: string;
    status: string;
    contactType: EContactType;
    tags: IContactTag[];
    leadSources: IContactLeadSource[];
}

export interface IContactsData {
    count: number;
    contacts: IContact[];
}

export interface IContactProfile {
    contactID: string;
    dateOfBirth: string;
    dateOfInjury: string;
    ssn: string;
}

export interface IContactAddress {
    contactID: string;
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
}

export interface IContactData {
    contact: IContact;
    contactProfile: IContactProfile;
    contactAddress: IContactAddress;
}

export interface MessageDataEmail {
    fromName: string;
    fromEmail: string;
    toEmail: string;
    subject: string;
    body: string;
}

export interface MessageDataSMS {
    fromNumber: string;
    toNumber: string;
    message: string;
}

type MessageData = MessageDataEmail | MessageDataSMS;

export interface Message {
    id: string;
    locationID: string;
    contactID: string;
    userID: string;
    messageData: MessageData;
    addedOn: string;
    isSent: boolean;
    messageType: string;
}

export interface MessageGroup {
    date: string;
    messages: Message[];
}

export interface MessagesResponse {
    contactID: string;
    messages: MessageGroup[];
    isLastPage: boolean;
}