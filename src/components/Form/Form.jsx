/* eslint-disable react/prop-types */
import './Form.css'

const Form = ({HandleInput}) => {
  return (
    <form>
        <input id="title" type="text" 
        placeholder="Title" 
        name='title'
        value={HandleInput.title}
        onChange={(e)=> HandleInput(e)}
        />
        <textarea id="description" type="text" 
        placeholder="Tell Your Story..." 
        name='content'
        value={HandleInput.content}
        onChange={(e)=> HandleInput(e)}
        />
    </form>
  );
};

export default Form;
