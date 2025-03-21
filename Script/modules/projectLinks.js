
export function buildProjectLinks(site, github, expansion) {
  const projectLinkParent = document.createElement("div");
  projectLinkParent.className = "projectLinkParent";

  const projectGithubLink = document.createElement("a");
  projectGithubLink.className = "";
  projectGithubLink.id = "";
  projectGithubLink.href = github;
  projectGithubLink.target = "_blank";
  projectGithubLink.rel = "noopener noreferrer";

  const projectGithubImg = document.createElement("img");

  return projectLinkParent
}