import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Icons

const TopicContent = ({ topic }) => {
  // Placeholder content for each topic
  const contentMap = {
    'Topic 1': 'Content for Topic 1 goes here.',
    Quiz: 'Quiz questions and options go here.',
    'Topic 2': 'Content for Topic 2 goes here.',
    // Add more topics as needed
  };

  return <div>{contentMap[topic]}</div>;
};

const Sidebar = () => {
  const [bookChapters, setBookChapters] = useState([
    {
      id: 1,
      chapterTitle: 'Chapter 1: Introduction',
      topics: ['Topic 1', 'Quiz', 'Topic 2'],
      isOpen: false,
    },
    {
      id: 2,
      chapterTitle: 'Chapter 2: Advanced Concepts',
      topics: ['Topic 3', 'Quiz 2', 'Topic 4'],
      isOpen: false,
    },
    // Add more chapters as needed
  ]);

  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleChapterClick = (chapterId) => {
    const updatedChapters = bookChapters.map((chapter) => {
      if (chapter.id === chapterId) {
        return { ...chapter, isOpen: !chapter.isOpen };
      } else {
        return { ...chapter, isOpen: false };
      }
    });
    setBookChapters(updatedChapters);
    setSelectedTopic(null); // Reset selected topic when a chapter is clicked
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-3 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            {bookChapters.map((chapter) => (
              <div key={chapter.id} className="nav-item">
                <h5
                  className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
                  onClick={() => handleChapterClick(chapter.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <span>
                    {chapter.chapterTitle}
                  </span>
                  <i
                    className={`bi ${
                      chapter.isOpen ? 'bi-chevron-up' : 'bi-chevron-down'
                    }`}
                  />
                </h5>
                <ul
                  className={`nav flex-column ${
                    chapter.isOpen ? 'show' : 'collapse'
                  }`}
                >
                  {chapter.topics.map((topic, index) => (
                    <li key={index} className="nav-item">
                      <div
                        className="nav-link"
                        onClick={() => handleTopicClick(topic)}
                        style={{ cursor: 'pointer' }}
                      >
                        {topic}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-9 px-md-4">
          <div className="scrollable-content" style={{ maxHeight: '500px', overflowY: 'auto' }}>
            {selectedTopic && (
              <div>
                <h3>{selectedTopic}</h3>
                <TopicContent topic={selectedTopic} />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
