function App() {
  const links = [
    {
      title: "Github",
      url: "#",
    },
    {
      title: "Linkedin",
      url: "#",
    },
    {
      title: "instagram",
      url: "#",
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
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
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
