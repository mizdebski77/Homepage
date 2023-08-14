export const fetchRepos = () => (
    fetch("https://api.github.com/users/mizdebski77/repos?sort=created&direction=desc")
        .then((response: Response) => response.json())
);
