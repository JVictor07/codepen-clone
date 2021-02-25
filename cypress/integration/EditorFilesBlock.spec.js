import "cypress-iframe";

const code = {
  html: `<div>
<h1 id="title"></h1>
<span>Clone Test</span>
</div>
`,
  css: `body {
color: white;
height: 100vh;
display: flex;
font-weight: bold;
text-align: center;
align-items: center;
background: #7D3CE8;
justify-content: center;
}`,
  js: `const elem = document.querySelector('#title');
elem.innerHTML = 'Codepen'
`,
};

describe("Testing the Codepen Clone Desktop", () => {
  it("Testing edit the codemirrors", () => {
    cy.visit("/");

    cy.viewport(1300, 600);

    cy.get("[data-cy=editor_files_block_HTML] .CodeMirror")
      .first()
      .then((editor) => {
        editor[0].CodeMirror.setValue("");
      });

    cy.get("[data-cy=editor_files_block_CSS] .CodeMirror")
      .first()
      .then((editor) => {
        editor[0].CodeMirror.setValue("");
      });

    cy.get("[data-cy=editor_files_block_JS] .CodeMirror")
      .first()
      .then((editor) => {
        editor[0].CodeMirror.setValue("");
      });

    cy.get("[data-cy=editor_files_block_HTML] .CodeMirror textarea").type(
      code.html,
      {
        force: true,
        delay: 0,
      }
    );

    cy.get("[data-cy=editor_files_block_CSS] .CodeMirror textarea").type(
      code.css,
      {
        force: true,
        delay: 0,
      }
    );

    cy.get("[data-cy=editor_files_block_JS] .CodeMirror textarea").type(
      code.js,
      {
        force: true,
        delay: 0,
      }
    );
  });

  it("Testing if the iframe change", () => {
    cy.enter("#output-iframe").then((getBody) => {
      getBody().find("div").children().should("have.length", 2);
      getBody().find("div h1").should("have.text", "Codepen");
      getBody().find("div span").should("have.text", "Clone Test");
    });
  });
});

describe("Testing the Codepen Clone Mobile", () => {
  it("Testing edit the codemirrors", () => {
    cy.visit("/");

    cy.viewport(415, 730);

    cy.get("[data-cy=editor_files_block_HTML] .CodeMirror")
      .first()
      .then((editor) => {
        editor[0].CodeMirror.setValue("");
      });

    cy.get("[data-cy=editor_files_block_HTML] .CodeMirror textarea").type(
      code.html,
      {
        force: true,
        delay: 0,
      }
    );

    cy.get("[role=tab]").contains("CSS").click();

    cy.get("[data-cy=editor_files_block_CSS] .CodeMirror")
      .first()
      .then((editor) => {
        editor[0].CodeMirror.setValue("");
      });

    cy.get("[data-cy=editor_files_block_CSS] .CodeMirror textarea").type(
      code.css,
      {
        force: true,
        delay: 0,
      }
    );

    cy.get("[role=tab]").contains("JS").click();

    cy.get("[data-cy=editor_files_block_JS] .CodeMirror")
      .first()
      .then((editor) => {
        editor[0].CodeMirror.setValue("");
      });

    cy.get("[data-cy=editor_files_block_JS] .CodeMirror textarea").type(
      code.js,
      {
        force: true,
        delay: 0,
      }
    );
  });

  it("Testing if the iframe change", () => {
    cy.enter("#output-iframe").then((getBody) => {
      getBody().find("div").children().should("have.length", 2);
      getBody().find("div h1").should("have.text", "Codepen");
      getBody().find("div span").should("have.text", "Clone Test");
    });
  });
});
