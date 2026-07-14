import { faker, Faker } from "@faker-js/faker";

export function generateRandomEmail (options : any){
     const email =  faker.internet.email(options);
     console.log(email);
     return email;
}