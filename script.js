// JavaScript:
const agentInitScript = document.createElement("script");
agentInitScript.type = "module";
agentInitScript.innerHTML = `import Agent from 'https://cdn.jsdelivr.net/npm/@agent-embed/js@latest/dist/web.js'
Agent.initStandard({
  agentName: "Tester Chat bot",
  filterResponse: function(response) {
      const citationRegex = /【d+:d+†[^【】]+】/g;
      return response.replace(citationRegex, "");
    }
});
`;
document.body.append(agentInitScript);

// Place the below component in your html
