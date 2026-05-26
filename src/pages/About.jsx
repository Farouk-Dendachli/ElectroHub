const About = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="fw-bold mb-3">About ElectroHub</h1>
          <p className="text-muted">
            ElectroHub is a fictional online technology store created as a
            university project. The website shows how to build a professional
            multi-page React application using simple concepts that are easy to
            explain in class.
          </p>

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold">Project Purpose</h2>
              <p className="text-muted mb-0">
                The purpose of this project is to practice frontend development
                with React Router, functional components, and Bootstrap for
                responsive design. Visitors can learn about the store, browse
                products, and send a message through the contact form.
              </p>
            </div>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="h5 fw-bold">What You Will Learn</h2>
              <ul className="text-muted mb-0">
                <li>How to structure a React project with pages and components</li>
                <li>How to navigate between pages without reloading the browser</li>
                <li>How to display products in cards with images and prices</li>
                <li>How to build a layout that works on mobile and desktop</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
