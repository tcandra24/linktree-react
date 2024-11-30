import ProfileImage from "./assets/uifaces-robot-image.jpg";

function App() {
  const links = [
    {
      title: "Github",
      url: "https://github.com/tcandra24",
    },
    {
      title: "Linkedin",
      url: "https://www.linkedin.com/in/tito-candra-280413160/",
    },
    {
      title: "instagram",
      url: "https://www.instagram.com/titocandp",
    },
  ];

  return (
    <>
      <div className="min-w-full flex justify-center mt-16">
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <div className="w-full text-center mb-5">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src={ProfileImage} />
                </div>
              </div>
              <p className="text-lg">Tito Candra</p>
              <p className="text-base">Web Developer</p>
            </div>

            <div className="w-full flex flex-col gap-y-5">
              {links.map((link, index) => (
                <a
                  className="btn btn-primary"
                  href={link.url}
                  target="_blank"
                  key={index}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
