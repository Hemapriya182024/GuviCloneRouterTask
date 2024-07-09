import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const articles = [
    {
      title: 'The Relationship Between Data Science and Artificial Intelligence',
      date: '08 Jul, 2024',
      readTime: '8 Min Read',
      imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2024/07/The-Relationship-Between-Data-Science-and-Artificial-Intelligence-768x286.webp',
    },
    {
      title: 'What is Data Science? Important Factors to Learn Before Getting Started',
      date: '03 Jul, 2024',
      readTime: '6 Min Read',
      imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2024/07/What-is-Data-Science-Important-Factors-to-Learn-Before-Getting-Started-768x286.webp',
    },
    {
      title: 'Crisis Management in Digital Marketing | A Beginner\'s guide',
      date: '02 Jul, 2024',
      readTime: '5 Min Read',
      imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2024/07/Feature-Image-Crisis-Management-in-Digital-Marketing-768x286.webp',
    },
    {
      title: 'Mastering Shadow DOM Events: A Comprehensive Guide [2024]',
      date: '29 Jun, 2024',
      readTime: '8 Min Read',
      imageUrl: 'https://www.guvi.in/blog/wp-content/uploads/2024/06/Feature-Image-Mastering-Shadow-DOM-Events-768x286.webp',
    },
  ];

  return (
    <>
      <h2 className="mb-4" style={{textAlign:'left'}}>Most Recent Articles</h2>
      <h4>Click blogs to see Router functions</h4>
      <div className="container">
        <div className="row">
          {articles.map((article, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img src={article.imageUrl} className="card-img-top" alt={article.title} />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">
                    <small className="text-muted">{article.date} - {article.readTime}</small>
                  </p>
                 
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional sections can be added here */}
      </div>
    </>
  );
}

export default Home;
