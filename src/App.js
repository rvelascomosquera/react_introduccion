import axios from "axios";
import './App.css';
import Course from './Course';
import { useEffect, useState } from 'react';

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get("https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories")
    .then(response => {
      setPost(response.data.communityCategories);
    });
  }, []);

  if (!post) return null;

  console.log(post);

  return (
    <>
      <h1>Cursos Larnu</h1>
      <div className="course"> {
          post.map((item) => {
            return (
              <Course
                key={item.id}
                background={item.background}
                icon={item.icon}
                name={item.name}
                quizzes={item.totalQuizzes}
              />
            )
          })
        }
      </div>
    </>
  );
}

export default App;
