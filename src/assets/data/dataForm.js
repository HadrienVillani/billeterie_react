const message = {
  name: "Message",
  allIputs: [
    { name: "Email", type: "input" },
    { name: "Nom", type: "input" },
    { name: "Prenom", type: "input" },
    { name: "Message", type: "textarea" },
  ],
};
const article = {
  name: "article",
  allIputs: [
    { name: "title", type: "input" },
    { name: "shortDescription", type: "textarea" },
    { name: "theme", type: "input" },
    { name: "date", type: "input" },
    { name: "body", type: "textarea" },
  ],
};
const event = {
  name: "article",
  allIputs: [
    { name: "title", type: "input" },
    { name: "shortDescription", type: "textarea" },
    { name: "theme", type: "input" },
    { name: "date", type: "input" },
    { name: "body", type: "textarea" },
  ],
};
export default { article, message, event };
