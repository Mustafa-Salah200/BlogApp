import { useState } from "react";
import Blog from "../Blog/Blog";
import "./Blogs.css";
import { useSelector } from "react-redux";

const Blogs = () => {
  const Blogs = useSelector(store => store.Blogs)

  const [active,setActive] = useState(0)
  const [blogs,setBlogs] = useState(Blogs)
  const types = ['All','Following','Programming','Data Science','Technology']
  
  const handleBlogsType = (type)=>{
    if(type === 'All'){
      setBlogs(Blogs)
    }else{
      const filteredBlogs = Blogs.filter(blog => blog.category === type)
      setBlogs(filteredBlogs)
    }
    setActive(types.indexOf(type))
  }
  return (
    <>        
      <div className="container">
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="types">
          {
            types.map((ele, index) =>{
              return (<span 
                key={index}
                className={active === index ? 'active' : ''}
                onClick={()=> handleBlogsType(ele)}
                >{ele}</span>)
            })
          }
        </div>
        <div className="blogs">
          {
            blogs && blogs.map(blog =>{
              return <Blog key={blog.id} blog={blog}/>
            })
          }
        </div>
      </div>
    </>
  );
};

export default Blogs;
