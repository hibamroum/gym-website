export enum SelectedPage{
    Home="home",
    Benefits="benefits",
    OurClasses="ourclasses",
    ContactUs="contactus"
}

//describing the object that will be in the array benefits
export interface BenefitType{
    icon:JSX.Element,
    title:string,
    description:string;
}

export interface ClassType{
    name:string,
    description?:string,//description will be optional
    image:string
}