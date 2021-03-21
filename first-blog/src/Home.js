import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(
      [
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]
    );
  
      const [name, setName] = useState('Tim');

    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id); //vrnem new filtered array based on original array
      setBlogs(newBlogs); //blogu nastavim novo vrednost, če je id enak id-ju v tabeli se zbriše
    }

    useEffect(() => {
      console.log('use effect ran');
      console.log(name);
    }, [name]);

    return (
      <div className="home">
       <BlogList blogs={blogs} title="All blogs:" handleDelete={handleDelete}/>  {/* prop - more reusable, lahko kopiramo, itd... */}
       <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs:"/>  {/* prop - filtered samo za mario */}
       <button onClick={() => setName('Luigi')}>Change name</button>
       <p>{name}</p>
      </div>
    );
  }
   
  export default Home;