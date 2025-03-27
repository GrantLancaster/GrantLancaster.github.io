
export function buildProjectLinks(site, github, expansion) {
  const projectLinkParent = document.createElement("div");
  projectLinkParent.className = "projectLinkParent";

  const projectGithubLink = document.createElement("a");
  projectGithubLink.href = github;
  projectGithubLink.target = "_blank";
  projectGithubLink.rel = "noopener noreferrer";
  projectGithubLink.style.zIndex = "10";

  const projectGithubImg = document.createElement("img");
  projectGithubImg.className = "icons";
  projectGithubImg.src = "../../img/github-mark-white.png";
  projectGithubImg.alt = "Github logo";

  projectGithubLink.appendChild(projectGithubImg);
  projectLinkParent.appendChild(projectGithubLink);

  if (site != "N/A") {
    const projectLiveLink = document.createElement("a");
    projectLiveLink.href = site;
    projectLiveLink.target = "_blank";
    projectLiveLink.rel = "noopener noreferrer";
    projectLiveLink.style.zIndex = "10";
  
    const projectLiveImg = document.createElement("img");
    projectLiveImg.className = "icons";
    projectLiveImg.src = "../../img/external-link.png";
    projectLiveImg.alt = "external link icon";
  
    projectLiveLink.appendChild(projectLiveImg);
    projectLinkParent.appendChild(projectLiveLink);
  }
  
  return projectLinkParent
}