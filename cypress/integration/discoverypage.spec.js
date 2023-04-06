
import {
  fetchPopularReposByTopics,
  saveToLocal,
  loadFromLocal,
} from "../../services/apiCalls";
import { topics } from "../../constants/topics";

describe("Discovery Page", () => {
  before(() => {
    cy.intercept(
      "GET",
      `https://api.github.com/search/repositories?q=topic:${topics[0]}+sort:stars&per_page=10&page=1`,
      {
        fixture: "repos1.json",
      }
    );
    cy.intercept(
      "GET",
      `https://api.github.com/search/repositories?q=topic:${topics[1]}+sort:stars&per_page=10&page=1`,
      {
        fixture: "repos2.json",
      }
    );
    cy.intercept(
      "GET",
      `https://api.github.com/search/repositories?q=topic:${topics[2]}+sort:stars&per_page=10&page=1`,
      {
        fixture: "repos3.json",
      }
    ).as("fetchRepos");
  });

  beforeEach(() => {
    cy.visit("/discovery");
  });

  it("displays the header with a 'Log In' button", () => {
    cy.get("header")
      .should("be.visible")
      .contains("Log In")
      .should("be.visible");
  });

  it("renders the default topics on load", () => {
    cy.get(".topic-toggle")
      .should("have.length", topics.length)
      .each(($topic, index) => {
        cy.wrap($topic).contains(topics[index]).should("be.visible");
      });
  });

  it("renders repositories sorted by stars by default", () => {
    cy.get(".sort-dropdown-container select").should(
      "have.value",
      loadFromLocal("sort") || "stars"
    );

    cy.get(".repo-container .repository-card").should(($repos) => {
      let prevStars = Infinity;
      $repos.each((index, repo) => {
        const currentStars = Number(
          Cypress.$(repo).find(".stars").text().replace(",", "")
        );
        expect(currentStars).to.be.at.most(prevStars);
        prevStars = currentStars;
      });
    });
  });

  it("allows toggling topics", () => {
    const selectedTopics = ["javascript", "ruby"];

    cy.get(".topic-toggle")
      .each(($topic, index) => {
        if (selectedTopics.includes(topics[index])) {
          cy.wrap($topic).find("input[type='checkbox']").check();
        } else {
          cy.wrap($topic).find("input[type='checkbox']").uncheck();
        }
      })
      .then(($topics) => {
        const selected = $topics
          .filter(":checked")
          .map((index, el) => Cypress.$(el).next().text());
        expect(selected.get()).to.deep.equal(selectedTopics);
      });

    cy.wait("@fetchRepos")
      .its("request.url")
      .should("include", "topic:javascript")
      .its("url")
      .should("include", "sort:stars");
    cy.wait("@fetchRepos")
      .its("request.url")
      .should("include", "topic:ruby")
      .its("url")
      .should("include", "sort:stars");

    cy.get(".repo-container")
      .should("contain", "JavaScript")
      .should("contain", "Ruby")
      .should("not.contain", "Java")
      .should("not.contain", "Python");
  });

  it("saves sort and selected topics to local storage", () => {
    cy.get(".sort-dropdown-container select").select("forks");

    cy.get(".topic-toggle input[type='checkbox']")
      .check("java")
      .check("python");

    expect(loadFromLocal("sort")).to.equal("forks");
    expect(loadFromLocal("selectedTopics")).to.deep.equal(["java", "python"]);
  });
});
