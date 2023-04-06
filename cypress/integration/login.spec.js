

import Login from "./Login";
import { mount } from "@cypress/react";

describe("Login Component", () => {
  it("renders the form and allows logging in", () => {
    const user = {
      id: "testId",
      username: "testUser"
    };
    const setUser = cy.stub().as("setUser");

    mount(<Login setUser={setUser} />);

    cy.get("h1").contains("Github Discovery").should("be.visible");

    cy.get("[name='sword']").type(user.username);
    cy.get("[name='Sword12345']").type("password");
    cy.get("[type='submit']").click();

    cy.wait(1000);

    cy.get("@setUser").should("have.been.calledOnceWithExactly", {
      id: user.id,
      username: user.username
    });

    cy.url().should("contain", "/discovery");
  });
});
