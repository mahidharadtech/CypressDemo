// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import Ajv from "ajv";
import { getUsers } from "../Route/schema/getUsers";

const getSchemaError = (getAjvError) => {
  return cy.wrap(
    `Field: ${getAjvError[0]["dataPath"]} is invalid. Cause: ${getAjvError[0]["message"]}`
  );
};

export const validateSchema = (schema, response) => {
  const ajv = new Ajv();
  const validate = ajv.addSchema(getUsers).compile(schema);
  const valid = validate(response);

  if (!valid) {
    getSchemaError(validate.errors).then((schemaError) => {
      throw new Error(schemaError);
    });
  } else {
    cy.log("Schema validated!");
  }
};