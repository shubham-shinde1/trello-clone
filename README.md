To Run the APP use "yarn dev" if "npm run dev" do not woork for anyone

deploy Link: https://kanban-boards-board13.onrender.com/

Today’s Task:

- Go through the PRDs
- Create an empty GitHub repo
- add a readme.md
- add technical document with data structure, libraries, deployment strategy etc.
- come with questions

https://docs.google.com/document/d/1LsQVa5aXNyZXvQJjj4qnzzVxk-v5t2Qe5VaT9pcTqlE/edit?usp=sharing

https://docs.google.com/document/d/147bfe3FxfD0qbrYtMwq_cJcuhH9TSG6eE_wDQPWAhYw/edit?usp=sharing



// Project Schema - Data Structure

"
{
    "boards": [
      {
        "id": "board-1",
        "title": "Project Manhattan",
        "columns": [
          {
            "id": "column-1",
            "title": "To Do",
            "cards": [
              {
                "id": "card-1",
                "title": "Enrich Uranium",
                "description": "Get uranium from russia",
                "members": ["Einstine", "Oppenheimer", "Fermi"],
                "due_date": "2023-06-01",
                "attachments": [
                  {
                    "id": "attachment-1",
                    "name": "BluePrint",
                    "url": "classified.pdf"
                  },
                  {
                    "id": "attachment-2",
                    "name": "Fat-Man BluePrint",
                    "url": "classified.png"
                  }
                ]
              },
              {
                "id": "card-2",
                "title": "Enrich Plutonium",
                "description": "Lorem ipsum dolor sit amet",
                "members": ["Fermi"],
                "due_date": null,
                "attachments": []
              }
            ]
          },
          {
            "id": "column-2",
            "title": "In Progress",
            "cards": []
          },
          {
            "id": "column-3",
            "title": "Done",
            "cards": []
          }
        ]
      }
    ],
    "users": [
      {
        "id": "user-1",
        "name": "Einstine",
        "email": "Einstine@us.com"
      },
      {
        "id": "user-2",
        "name": "Jane Smith",
        "email": "Jane Smith@us.com"
      },
      {
        "id": "user-3",
        "name": "Fermi",
        "email": "Fermi@us.com"
      }
    ]
  }
"

