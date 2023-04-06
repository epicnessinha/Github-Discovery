
import { AuthContext } from "./AuthContextProvider";
import { mount } from "@cypress/react";

describe("AuthContextProvider Component", () => {
  it("provides the correct context values", () => {
    const Bookmarks = () => {
      const { user, setUser, loggedInUserId, setLoggedInUserId, userBookmarks, addToBookmarks, removeFromBookmarks } = useContext(AuthContext);

      return (
        <div>
          <p>{`user: ${JSON.stringify(user)}`}</p>
          <button onClick={() => setUser({ id: "testId", username: "testUser" })}>
            Set User
          </button>
          <p>{`loggedInUserId: ${loggedInUserId}`}</p>
          <button onClick={() => setLoggedInUserId("testId")}>
            Set LoggedInUserId
          </button>
          <p>{`userBookmarks: ${JSON.stringify(userBookmarks)}`}</p>
          <button onClick={() => addToBookmarks({ id: "testRepoId" })}>
            Add to Bookmarks
          </button>
          <button onClick={() => removeFromBookmarks({ id: "testRepoId" })}>
            Remove from Bookmarks
          </button>
        </div>
      );
    };

    mount(
      <AuthContextProvider>
        <Bookmarks />
      </AuthContextProvider>
    );

    cy.contains("user: null").should("be.visible");
    cy.get("button:contains('Set User')").click();
    cy.contains("user: {\"id\":\"testId\",\"username\":\"testUser\"}").should(
      "be.visible"
    );

    cy.contains("loggedInUserId: null").should("be.visible");
    cy.get("button:contains('Set LoggedInUserId')").click();
    cy.contains("loggedInUserId: testId").should("be.visible");

    cy.contains("userBookmarks: {}").should("be.visible");
    cy.get("button:contains('Add to Bookmarks')").click();
    cy.contains("userBookmarks: {\"testId\":[{\"id\":\"testRepoId\"}]}").should(
      "be.visible"
    );
    cy.get("button:contains('Remove from Bookmarks')").click();
    cy.contains("userBookmarks: {\"testId\":[]}").should("be.visible");
  });
});
