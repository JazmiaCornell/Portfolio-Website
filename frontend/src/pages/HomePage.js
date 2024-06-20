function HomePage() {
  return (
    <>
      <h2>Jazmia's Portfolio Website</h2>
      <article>
        <p>
          As a dedicated professional, I am passionate about leveraging
          technology to make a positive impact on people's lives. Through my
          academic journey, I have developed strong technical skills and a deep
          understanding of how to create solutions that empower individuals and
          communities. My goal is to join an organization where I can contribute
          to meaningful projects that prioritize helping others, fostering
          collaboration, and driving social change. I am committed to using my
          growing expertise to support and uplift those around me, and I am
          eager to bring my empathy, creativity, and enthusiasm to a role that
          values making a difference.
        </p>
      </article>
      <p>
        The following list contains the major technologies used in this site:
      </p>
      <ul>
        <li>
          {" "}
          <strong>HTML:</strong> was used to provide page layout, navigation,
          hyperlinks, and the text content.
        </li>
        <li>
          {" "}
          <strong>CSS:</strong> was used to provide styling to the elements
          within the webpage. Such as buttons, form validations, headers, etc.
        </li>
        <li>
          {" "}
          <strong>JavaScript:</strong> is used to make the page interactive and
          dynamic for the user.
        </li>
        <li>
          {" "}
          <strong>MongoDB:</strong> is a NoSQL database that is used to store
          data; that is scalable and performs well in data storage and
          retrieval.
        </li>
        <li>
          {" "}
          <strong>React:</strong> is a JavaScript library that allows a
          developer to create reusable components and to manage the state of a
          webpage. Game.js is a reusable component that was created and is
          reused each time a new game is added to the collection.
        </li>
        <li>
          {" "}
          <strong>Node.js:</strong> is used on the server side. It allows for
          requests, on the client-side, to be handled efficiently.
        </li>
        <li>
          {" "}
          <strong>Express:</strong> is used to handle routing and managing the
          server side. For example, when the user submits a form, they are
          re-routed to another page.
        </li>
        <li>
          {" "}
          <strong>Asynchronous programming:</strong> is used so that multiple
          tasks can be completed by the webpage without making the user wait.
          This improves the experience of the user and performance of the site.
        </li>
        <li>
          {" "}
          <strong>DOM:</strong> is manipulated by JavaScript to update the
          webpage dynamically and provide a responsive and interactive
          experience for the user.
        </li>
        <li>
          {" "}
          <strong>Single Page Applications:</strong> are applications that are a
          single HTML page that is dynamically updated based on user
          interactions. This webpage is an example of that.
        </li>
        <li>
          {" "}
          <strong>Mongoose:</strong> is a NoSQL database that stores the data
          for each Game added to the collection.
        </li>
        <li>
          {" "}
          <strong>REST:</strong> is used to communicate between the client-side
          and server-side, which enables data to be exchanged.
        </li>
        <li>
          {" "}
          <strong>CRUD:</strong> allows for users to <strong>create</strong> a
          new game to add to the collection. <strong>Read</strong> the games
          already within the collection. <strong>Update</strong> a game if the
          entered information is incorrect. Finally, the ability to{" "}
          <strong>delete</strong> games from the collection.
        </li>
      </ul>
    </>
  );
}

export default HomePage;
